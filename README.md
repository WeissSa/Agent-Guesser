# Idea
The stats of Valorant pro players might be able to be used to guess the agent of a generic player. I made a web app using React and Spring Boot with a machine learning algorithm powered by scikit-learn and the gaussian naive bayes categorization algorithm.

### Process
Initially I tried using the absolute best players (n=~250) as a sample size, but this was not enough to train my model. So I re-ran my scraper to allow for any pro play in VCT2022. However, this results in a decrease of quality of results. So I decided to instead take the results from multiple circuits (linked in Resources) with the following parameters:
1. At least 500 opponent rating
2. At least 100 rounds played

### Main Limitations
1. Not all agents receive equal play. This means it is harder to correlate data with lesser played agents
2. A normal player might have very different stats from a pro
3. Some agents have similar roles, so differentiating between them from stats is inherently challenging. To remedy this, on the frontend I display the agent and the role as guesses.
4. A constantly changing meta means this might not be as accurate on modern data

### Findings
I made three different models. The model used in the API is the agent guessing model. This model has an accuracy of ~46%. Considering there are 20 agents and some of those agents are bound to have similar stats, I would characterize this as extremely successul, especially given the restrictions on the size of the data.)

However, I wondered how accurate it was accounting for agent similarity, so I made 2 other models.

The first of these tries to categorize by the agent class (Duelist/Initiator/Controller/Sentinel). This is the riot-sanctioned categories that I could categorize into. With this in mind, my accuracy was ~61%. This is a great improvement, but I knew I could do better.

There are some agents which when played in pro-play, fit better into other classes. Therefore, I made my own 4 roles (Star Player/Assistant to the Star Player/Smokes Specialist/Area Denier). This moved the following agents from their default role:
1. Chamber from Area Denier to Star Player
2. Viper from Smokes Specialist to Area Denier
3. Sage from Area Denier to Assistant to the Star Player

| Star Player | Assistant to the Star Player | Smokes Specialist | Area Denier |
|:-----------:|:----------------------------:|:-----------------:|:-----------:|
|   Chamber   |            Breach            |       Astra       |    Cypher   |
|     Jett    |             Fade             |     Brimstone     |   Killjoy   |
|   Phoenix   |             Kayo             |       Harbor      |    Viper    |
|     Raze    |             Sage             |        Omen       |             |
|    Reyna    |             Skye             |                   |             |
|     Yoru    |             Sova             |                   |             |

When categorizing like this, I achieved a ~68% success rate.

In the end, I send the agent guess to the frontend and then manually categorize, but I am very happy with the accuracy of my results given the variety and similarity of agents.

# File Structure
There are 3 main folders for this project:
1. frontend
2. backend
3. data

The first two are fairly self-explanatary, but the third is where I did web-scraping and machine-learning focused work.

# Resources

I scraped my dataset from [vlr.gg](https://www.vlr.gg/stats/) where I took a sample of the top players in 2022. 

Specific links were taken from:
1. [VCT 2022](https://www.vlr.gg/stats/?event_group_id=14&event_id=all&region=all&country=all&min_rounds=100&min_rating=500&agent={agent}&map_id=all&timespan=all)
2. [VCT 2022 Offseason](https://www.vlr.gg/stats/?event_group_id=32&event_id=all&region=all&country=all&min_rounds=100&min_rating=500&agent={agent}&map_id=all&timespan=all)
3. [Knights Gauntlet Circuit 2022](https://www.vlr.gg/stats/?event_group_id=21&event_id=all&region=all&country=all&min_rounds=100&min_rating=500&agent={agent}&map_id=all&timespan=all)
4. [VCT Game Changers 2022](https://www.vlr.gg/stats/?event_group_id=17&event_id=all&region=all&country=all&min_rounds=100&min_rating=500&agent={agent}&map_id=all&timespan=all)
5. [VRL 2022](https://www.vlr.gg/stats/?event_group_id=15&event_id=all&region=all&country=all&min_rounds=100&min_rating=500&agent={agent}&map_id=all&timespan=all)

I also want to credit [tkomarlu](https://github.com/tkomarlu) for helping me plan out the project/learn how to apply scikit-learn to the idea.


# Deployment
1. .env on frontend needs REACT_APP_BASE_URL set to BE url
2. build the files and export them into out. The PMML for your model must sit next to your .jar file (see example in repo)
3. Run Dockerfile to create a website image

# A Quick Note on Testing
I decided not to test this project since each component is very small/simple. If I end up adding to it, I may add testing, but for now I am more concerned with it working as I expect it to.
