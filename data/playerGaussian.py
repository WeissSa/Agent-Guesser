import os

import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
import time
from sklearn import metrics

TARGET_FIELDS = ["ACS", "KD", "ADR", "KPR", "APR", "FKPR"]

AGENT_MAP = {
    "kayo": 0,
    "raze": 1,
    "chamber": 2,
    "jett": 3,
    "killjoy": 4,
    "viper": 5,
    "sova": 6,
    "breach": 7,
    "omen": 8,
    "astra": 9,
    "skye": 10,
    "sage": 11,
    "brimstone": 12,
    "cypher": 13,
    "yoru": 14,
    "neon": 15,
    "fade": 16,
    "reyna": 17,
    "phoenix": 18
}

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


#using RandomForest classifier
model = RandomForestClassifier().fit(X_train, y_train)


test_results = model.predict(X_test)
accuracy = metrics.accuracy_score(y_test, test_results)


print("accuracy:   %0.4f" % accuracy)

t1 = time.time() - t0 #to calculate model training time
print(t1, " seconds")

