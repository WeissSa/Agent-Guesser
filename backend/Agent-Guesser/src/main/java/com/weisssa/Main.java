package com.weisssa;

import com.weisssa.agent_guesser.AgentGuesser;
import com.weisssa.agent_guesser.Guesser;
import com.weisssa.api.GuessController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Main {
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }

    public Main(){
        Guesser agentGuesser = new AgentGuesser();
        GuessController.setAgentGuesser(agentGuesser);
    }
}
