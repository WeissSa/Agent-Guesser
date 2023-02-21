package com.weisssa.agent_guesser;


public interface Guesser {

    public static class MissingFieldException extends Exception{
        public MissingFieldException(String errorMessage){
            super(errorMessage);
        }
    }

    /**
     * Return the agent guess
     * **/
    public String makeGuess(Stats stats) throws MissingFieldException;
}
