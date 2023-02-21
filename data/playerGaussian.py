# This is the only model we export. To see a non-exported version of the ccode see the ToClass and ToRole versions

import os

import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
import time
from sklearn import metrics
from agentMap import AGENT_MAP

from sklearn2pmml import PMMLPipeline, sklearn2pmml

TARGET_FIELDS = ["ACS", "KD", "ADR", "KPR", "APR", "FKPR"]



folder = os.getcwd()

csv_path = os.path.join(folder,'player_data.csv')

# select input fields
player_df = pd.read_csv(csv_path)
data = pd.DataFrame(player_df[TARGET_FIELDS[0]])
for field in TARGET_FIELDS[1:]:
    data = data.join(player_df[field])

# pick the most used agent for each player
agents = [agent.strip().strip("[").strip("]").split(",")[0] for agent in player_df["agents"]]
for index, agent in enumerate(agents):
    agents[index] = AGENT_MAP[agent.strip("'")]

agents = pd.DataFrame(agents)

X_train, X_test, y_train, y_test = train_test_split(data, agents, test_size=0.2, random_state=10)

t0= time.time() #to start timer on model training time


#using GaussianNB classifier
pipeline = PMMLPipeline([("sc", StandardScaler()),("pca", PCA()),("classifier", GaussianNB())])

model = pipeline.fit(X_train, y_train)
# model = GaussianNB().fit(X_train, y_train.values.ravel())

test_results = model.predict(X_test)
accuracy = metrics.accuracy_score(y_test, test_results)

# export pmml
sklearn2pmml(pipeline, "model.pmml", with_repr=True)

print("accuracy:   %0.2f" % accuracy)

t1 = time.time() - t0 #to calculate model training time
print(t1, " seconds")

# accuracy is 0.46 with training time of 0.0143
# with limited fields, and how some agents are bound to have similar stats, I feel this is pretty good