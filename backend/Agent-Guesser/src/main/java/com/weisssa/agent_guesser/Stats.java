package com.weisssa.agent_guesser;

import java.util.Map;

public class Stats {
    private double acs = -1;
    private double kd = -1;
    private double adr = -1;
    private double kpr = -1;
    private double apr = -1;
    private double fkpr = -1;

    public Map<String, Double> getMap(){
        return Map.of(
                "ACS", acs,
                "KD", kd,
                "ADR", adr,
                "KPR", kpr,
                "APR", apr,
                "FKPR", fkpr
        );
    }

    public boolean isImpossible(){
        return acs < 0 || kd < 0 ||
                adr < 0 || kpr < 0 ||
                apr < 0 || fkpr < 0;
    }

    public double getAcs() {
        return acs;
    }

    public void setAcs(double acs) {
        this.acs = acs;
    }

    public double getKd() {
        return kd;
    }

    public void setKd(double kd) {
        this.kd = kd;
    }

    public double getAdr() {
        return adr;
    }

    public void setAdr(double adr) {
        this.adr = adr;
    }

    public double getKpr() {
        return kpr;
    }

    public void setKpr(double kpr) {
        this.kpr = kpr;
    }

    public double getApr() {
        return apr;
    }

    public void setApr(double apr) {
        this.apr = apr;
    }

    public double getFkpr() {
        return fkpr;
    }

    public void setFkpr(double fkpr) {
        this.fkpr = fkpr;
    }
}
