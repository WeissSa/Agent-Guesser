package com.weisssa.agent_guesser;

public class AgentGuesser implements Guesser{
    @Override
    public String makeGuess(Stats stats) throws MissingFieldException {
        if (stats.isImpossible()){
            throw new MissingFieldException("Stats are impossible or a field is missing");
        }
        return "Kayo";
    }
}
