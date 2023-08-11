AGENT_MAP = {
    "kayo": 0,
    "raze": 1,
    "chamber": 2,
    "jett": 3,
    "killjoy": 4,
    "viper": 5,
    "sova": 6,
    "breach": 7,
    "omen": 8,
    "astra": 9,
    "skye": 10,
    "sage": 11,
    "brimstone": 12,
    "cypher": 13,
    "yoru": 14,
    "neon": 15,
    "fade": 16,
    "reyna": 17,
    "phoenix": 18,
    "harbor": 19,
    "gekko": 20
}

# 0 = duelist
# 1 = initiator
# 2 = controller
# 3 = Sentinel
AGENT_MAP_TO_CLASS = {
    "kayo": 1,
    "raze": 0,
    "chamber": 3,
    "jett": 0,
    "killjoy": 3,
    "viper": 2,
    "sova": 1,
    "breach": 1,
    "omen": 2,
    "astra": 2,
    "skye": 1,
    "sage": 3,
    "brimstone": 2,
    "cypher": 3,
    "yoru": 0,
    "neon": 0,
    "fade": 1,
    "reyna": 0,
    "phoenix": 0,
    "harbor": 2,
    "gekko": 3
}

# 0 = Duelist + chamber
# 1 = initiator + sage
# 2 = controller - viper
# 3 = Sentinel + viper - chamber - sage
AGENT_MAP_TO_ROLE = {
    "kayo": 1,
    "raze": 0,
    "chamber": 0,
    "jett": 0,
    "killjoy": 3,
    "viper": 3,
    "sova": 1,
    "breach": 1,
    "omen": 2,
    "astra": 2,
    "skye": 1,
    "sage": 1,
    "brimstone": 2,
    "cypher": 3,
    "yoru": 0,
    "neon": 0,
    "fade": 1,
    "reyna": 0,
    "phoenix": 0,
    "harbor": 2,
    "gekko": 3
}