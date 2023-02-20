package com.weisssa.agent_guesser;

public class Stats {
    private float acs = -1;
    private float kd = -1;
    private float adr = -1;
    private float kpr = -1;
    private float apr = -1;
    private float fkpr = -1;

    public boolean isImpossible(){
        return acs < 0 || kd < 0 ||
                adr < 0 || kpr < 0 ||
                apr < 0 || fkpr < 0;
    }

    public float getAcs() {
        return acs;
    }

    public void setAcs(float acs) {
        this.acs = acs;
    }

    public float getKd() {
        return kd;
    }

    public void setKd(float kd) {
        this.kd = kd;
    }

    public float getAdr() {
        return adr;
    }

    public void setAdr(float adr) {
        this.adr = adr;
    }

    public float getKpr() {
        return kpr;
    }

    public void setKpr(float kpr) {
        this.kpr = kpr;
    }

    public float getApr() {
        return apr;
    }

    public void setApr(float apr) {
        this.apr = apr;
    }

    public float getFkpr() {
        return fkpr;
    }

    public void setFkpr(float fkpr) {
        this.fkpr = fkpr;
    }
}
