import requests
from bs4 import BeautifulSoup
import pandas as pd
from agentMap import AGENT_MAP

UNUSED_COL_INDEX = [3, 8, 9, 10]
URLS = [
    "https://www.vlr.gg/stats/?event_group_id=14&event_id=all&region=all&country=all&min_rounds=100&min_rating=500&agent={agent}&map_id=all&timespan=all",
    "https://www.vlr.gg/stats/?event_group_id=32&event_id=all&region=all&country=all&min_rounds=100&min_rating=500&agent={agent}&map_id=all&timespan=all",
    "https://www.vlr.gg/stats/?event_group_id=21&event_id=all&region=all&country=all&min_rounds=100&min_rating=500&agent={agent}&map_id=all&timespan=all",
    "https://www.vlr.gg/stats/?event_group_id=17&event_id=all&region=all&country=all&min_rounds=100&min_rating=500&agent={agent}&map_id=all&timespan=all",
    "https://www.vlr.gg/stats/?event_group_id=15&event_id=all&region=all&country=all&min_rounds=100&min_rating=500&agent={agent}&map_id=all&timespan=all",
    "https://www.vlr.gg/stats/?event_group_id=45&event_id=all&region=all&country=all&min_rounds=20&min_rating=500&agent={agent}&map_id=all&timespan=all"
]

def main():
    rows = []
    for URL in URLS:
        for agent in AGENT_MAP.keys():
            page = requests.get(URL.replace("{agent}", agent))

            parsed_page = BeautifulSoup(page.content, "html.parser")

            # get the entire table of players
            player_table = parsed_page.find(class_="wf-table mod-stats mod-scroll")

            # find the rows by finding each player and taking the parent
            rows += [player.parent for player in player_table.find_all(class_="mod-player mod-a")]
            print("Finished scraping", agent, "for URL", URLS.index(URL) + 1)
        print("----- Finished scraping URL:", URL, "-----")
    
    # create column arrays
    name = []
    team = []
    agents = []
    rounds = []
    rating = []
    ACS = []
    KD = []
    ADR = []
    KPR = []
    APR = []
    FKPR = []

    # this allows us to access the coloured fields in a for-loop which simplifies logic
    coloured_squares = [rating, ACS, KD, ADR, KPR, APR, FKPR]
    for row in rows:
        name.append(row.find(class_="text-of").text)
        team.append(row.find(class_="stats-player-country").text)
        agents.append([format_agent_url(elem["src"]) for elem in row.find_all("img")])
        rounds.append(int(row.find(class_="mod-rnd").text))
        # need to keep track of 2 separate indices to make sure fields are aligned
        list_index = 0
        for index, square in enumerate(row.find_all("div", class_="color-sq")):
            if index in UNUSED_COL_INDEX:
                continue
            coloured_squares[list_index].append(float(square.text))
            list_index += 1
    
    data = {
        "name": name, 
        "team": team,
        "agents": agents,
        "rounds": rounds,
        "rating": rating,
        "ACS": ACS, 
        "KD": KD, 
        "ADR": ADR,
        "KPR": KPR,
        "APR": APR,
        "FKPR": FKPR
    }

    dataframe = pd.DataFrame(data=data)
    dataframe.to_csv("player_data.csv", index=False)
    print("Created CSV")

def format_agent_url(url: str) -> str:
    """
    Return the agent name from the agent's image url
    """
    string_dot_png = url.split("/")[-1]
    return string_dot_png[0 : string_dot_png.index(".")]

if __name__ == "__main__":
    main()



