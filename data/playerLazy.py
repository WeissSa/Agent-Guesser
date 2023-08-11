# This is the only model we export. To see a non-exported version of the ccode see the ToClass and ToRole versions

import os

import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.naive_bayes import GaussianNB
from lazypredict.Supervised import LazyClassifier
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

X_train, X_test, y_train, y_test = train_test_split(data, agents, test_size=0.20, random_state=10)

t0= time.time() #to start timer on model training time


# generate all models
clf = LazyClassifier(verbose=0,ignore_warnings=True, custom_metric=None)
models, predictions = clf.fit(X_train, X_test, y_train, y_test)

# print all models
print(models)


