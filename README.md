# Idea
The stats of Valorant pro players might be able to be used to guess the agent of a generic player. I want to make a web app using React and Spring Boot with a machine learning algorithm powered by scikit-learn.

### Process
Initially I tried using the absolute best players (n=~250) as a sample size, but this was not enough to train my model. So I re-ran my scraper to allow for any pro play in VCT2022. However, this results in a decrease of quality of results. So I decided to instead take the results from 3 circuits (VCT 2022, VCT 2022 offseason, VCT GameChangers) with the following parameters:
1. At least 500 rating
2. At least 50 rounds played

# File Structure
There are 3 main folders for this project:
1. frontend
2. backend
3. data

The first two are fairly self-explanatary, but the third is where I did web-scraping and machine-learning focused work.

## Resources

I scraped my dataset from [vlr.gg](https://www.vlr.gg/stats/?event_group_id=14&event_id=all&region=all&country=all&min_rounds=50&min_rating=500&agent=all&map_id=all&timespan=all) where I took a sample of the top players in 2022. 

I also want to credit [tkomarlu](https://github.com/tkomarlu) for helping me plan out the project/learn how to apply scikit-learn to the idea.
