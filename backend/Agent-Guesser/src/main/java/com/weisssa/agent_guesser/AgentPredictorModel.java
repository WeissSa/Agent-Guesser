package com.weisssa.agent_guesser;
import org.jpmml.evaluator.Evaluator;
import org.jpmml.evaluator.EvaluatorUtil;
import org.jpmml.evaluator.LoadingModelEvaluatorBuilder;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

import java.io.InputStream;

import java.util.Map;

public class AgentPredictorModel {
    private Evaluator evaluator;

    public AgentPredictorModel(){
        try {
            Resource resource = new ClassPathResource("model.pmml");
            InputStream inputStream = resource.getInputStream();
            evaluator = new LoadingModelEvaluatorBuilder().load(inputStream).build();
            evaluator.verify();
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }
    }

    public String makePrediction(Stats stats){
        try {
            Map<String, ?> result = evaluator.evaluate(stats.getMap());
            result = EvaluatorUtil.decodeAll(result);
            String[] finalResults = new String[3];
            return intToAgent(Integer.parseInt(result.get("0").toString()));
        } catch (Exception e) {
            System.out.println(e.getMessage());
            return "Error " + e.getMessage();
        }
    }

    private final String[] agents =
            {
                    "kayo",
                    "raze",
                    "chamber",
                    "jett",
                    "killjoy",
                    "viper",
                    "sova",
                    "breach",
                    "omen",
                    "astra",
                    "sage",
                    "sage",
                    "brimstone",
                    "cypher",
                    "yoru",
                    "neon",
                    "fade",
                    "reyna",
                    "phoenix",
                    "harbor"
            };

    String intToAgent(int i){
        return agents[i];
    }
}
