package com.weisssa.api;

import com.weisssa.agent_guesser.Guesser;
import com.weisssa.agent_guesser.Stats;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class GuessController {
    private static Guesser agentGuesser;

    public static void setAgentGuesser(Guesser aG) {
        agentGuesser = aG;
    }

    // Using a POST request simplifies process and allows us to use the body
    @PostMapping("/api/v1/guess")
    public Map guessAgentResponse(@RequestBody Stats stats){
        try {
            String agent = agentGuesser.makeGuess(stats);
            return new HashMap<String, String>() {{
                put("Agent", agent);
            }};
        } catch (Exception e) {
            return new HashMap<String, String>() {{
                put("Error", e.getMessage());
            }};
        }

    }
}
