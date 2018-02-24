var dataStrengths = [
    {
        theme: "Achiever", domain: "executing",
        adjectives: ["driven", "diligent", "intense", "self-motivated",
            "productive", "ambitious", "independent"],
        nouns: ["laborer", "worker", "producer", "doer", "completer",
            "finisher"]
    },
    {
        theme: "Activator", domain: "influencing",
        adjectives: ["impatient", "influential", "action-oriented",
            "initiating", "catalytic", "propulsive", "fast", "dynamic"],
        nouns: ["catalyst", "initiator", "instigator", "starter",
            "originator", "influencer"]
    },
    {
        theme: "Adaptability", domain: "relationship",
        adjectives: ["flexible", "responsive", "easygoing", "present",
            "in the moment", "spontaneous", "agreeable", "existential"],
        nouns: ["first responder", "early adopter", "accomodator", "follower"]
    },
    {
        theme: "Analytical", domain: "executing",
        adjectives: ["objective", "numbers-oriented", "data-driven",
            "dispassionate", "skeptical", "questioning", "scientific"],
        nouns: ["scientist", "measurer", "counter", "fact-finder/user",
            "observer", "logician"]
    },
    {
        theme: "Arranger", domain: "executing",
        adjectives: ["flexible", "interactive", "controlling",
            "collaborative", "multi-thinking", "configuring", "real-time",
            "resourceful"],
        nouns: ["juggler", "orchestrator", "coordinator", "rearranger",
            "multi-thinker", "controller", "enlister", "conductor"]
    },
    {
        theme: "Belief", domain: "executing",
        adjectives: ["certain", "stable", "unchanging", "principled", "passionate", "committed", "self-sacrificing"],
        nouns: ["missionary", "contributor", "believer", "altruist"]
    },
    {
        theme: "Command", domain: "influencing",
        adjectives: ["decisive", "clarifying", "driven", "persuasive", "challenging", "intimidating", "assertive",
            "controlling", "opinionated", "imposing", "strong-willed", "candid"],
        nouns: ["controller", "leader", "driver", "clarifier", "persuader", "fighter", "challenger", "intimidator"]
    },
    {
        theme: "Communication", domain: "influencing",
        adjectives: ["talkative", "presenting", "verbal", "transparent", "interactive",
            "conversational", "expressive", "captivating"],
        nouns: ["talker", "presenter", "conversationalist", "storyteller", "verbal processor",
            "explainer", "writer"]
    },
    {
        theme: "Competition", domain: "influencing",
        adjectives: ["scorekeeping", "comparing", "winning", "measuring", "aspiring",
            "driven", "intense", "selective"],
        nouns: ["winner", "scorekeeper", "comparer", "measurer"]
    },
    {
        theme: "Connectedness", domain: "relationship",
        adjectives: ["integrating", "seeking", "spiritual", "comforting", "perceptive",
            "mystical", "philosophic", "counseling", "listening"],
        nouns: ["integrator", "bridge-builder", "environmentalist", "humanitarian",
            "communitarian", "unifier", "social advocate", "seeker"]
    },
    {
        theme: "Consistency", domain: "executing",
        adjectives: ["fair", "equal", "leveling", "compliant", "predictable", "consistent",
            "just", "practical", "efficient"],
        nouns: ["standardizer", "rule-enforcer", "systematizer", "referee"]
    },
    {
        theme: "Context", domain: "strategy",
        adjectives: ["historical", "orienting", "perceptive", "highlighting", "collecting",
            "studious"],
        nouns: ["historian", "framer", "recorder", "archeologist", "genealogist"]
    },
    {
        theme: "Deliberative", domain: "executing",
        adjectives: ["careful", "guarded", "conservative", "sensible", "thoughtful",
            "serious", "confidential", "observant", "vigilant", "risk-averse",
            "private", "compliant"],
        nouns: ["risk-assessor", "preventer", "guardian", "planner"]
    },
    {
        theme: "Developer", domain: "relationship",
        adjectives: ["patient", "perceptive", "effective", "encouraging", "investing",
            "others-oriented", "observant", "growth-oriented", "self-sacrificing",
            "helpful"],
        nouns: ["investor", "coach", "mentor", "teacher", "encourager", "stretcher"]
    },
    {
        theme: "Discipline", domain: "executing",
        adjectives: ["predictable", "detail-oriented", "organized", "efficient",
            "meticulous", "structured", "neat", "orderly", "timely", "rehearsed",
            "planned", "exact"],
        nouns: ["organizer", "planner", "self-controller", "architect", "structurer",
            "perfectionist"]
    },
    {
        theme: "Empathy", domain: "relationship",
        adjectives: ["listening", "emotional", "sensitive", "aware", "intuitive",
            "confidential", "helpful", "sensate"],
        nouns: ["feeler", "confidant", "expresser", "sage", "absorber", "listener",
            "resonator"]
    },
    {
        theme: "Focus", domain: "executing",
        adjectives: ["goal-oriented", "persevering", "driven", "efficient", "single-minded",
            "progress-aware", "selective", "distraction-averse"],
        nouns: ["concentrator", "prioritizer", "rudder", "director", "guide", "goal setter"]
    },
    {
        theme: "Futuristic", domain: "strategy",
        adjectives: ["creative", "inspiring", "vivid", "anticipating", "imaginative",
            "expressive", "communicating", "perceptive", "future-oriented"],
        nouns: ["forecaster", "visionary", "dreamer", "predictor", "imaginer",
            "anticipator"]
    },
    {
        theme: "Harmony", domain: "relationship",
        adjectives: ["practical", "concrete", "conflict-reducing", "collaborative",
            "agreeable", "task-oriented"],
        nouns: ["mediator", "negotiator", "arbitrator", "ombudsman", "ambassador",
            "diplomat", "pragmatist", "peacemaker"]
    },
    {
        theme: "Ideation", domain: "strategy",
        adjectives: ["spontaneous", "creative", "innovative", "collaborative",
            "artistic", "insightful", "resourceful", "stimulating"],
        nouns: ["inventor", "creator", "designer", "artist", "innovator", "brainstormer",
            "novelist"]
    },
    {
        theme: "Includer", domain: "relationship",
        adjectives: ["accepting", "tolerant", "interactive", "perceptive", "others-oriented",
            "welcoming", "sensitive", "integrating"],
        nouns: ["acceptor", "tolerator", "inviter", "welcomer", "assimilator", "barrier-buster"]
    },
    {
        theme: "Individualization", domain: "relationship",
        adjectives: ["aware", "unique", "perceptive", "people-oriented", "strengths-oriented",
            "astute", "fair", "accurate", "insightful", "diverse"],
        nouns: ["customizer", "observer", "acceptor", "noticer", "spotter", "anthropologist",
            "novelist", "biographer"]
    },
    {
        theme: "Input", domain: "strategy",
        adjectives: ["resourceful", "collecting", "inquisitive", "utility-aware",
            "generous", "well-read", "knowledgeable", "investigative"],
        nouns: ["archivist", "librarian", "collector", "absorber", "curator", "resourcer",
            "circulator"]
    },
    {
        theme: "Intellection", domain: "strategy",
        adjectives: ["introspective", "solitary", "intellectual", "philosophical", "in-depth",
            "reflective", "discontent", "thinking", "intense", "musing", "driven"],
        nouns: ["thinker", "philosopher", "discussant", "muser", "loner", "writer", "blogger"]
    },
    {
        theme: "Learner", domain: "strategy",
        adjectives: ["curious", "interested", "inquisitive", "open-minded", "studious",
            "passionate", "competent"],
        nouns: ["student", "explorer", "discoverer", "self-helper", "continuous-improver",
            "expert"]
    },
    {
        theme: "Maximizer", domain: "influencing",
        adjectives: ["selective", "strengths-oriented", "quality-oriented", "results-oriented",
            "strengths-obsessed", "excellence-aware", "discriminating", "choosy", "judging",
            "sorting", "dissatisfied"],
        nouns: ["leader", "driver", "clarifier", "persuader", "fighter", "challenger",
            "demander", "perfectionist", "quality controller"]
    },
    {
        theme: "Positivity", domain: "relationship",
        adjectives: ["fun", "optimistic", "hopeful", "generous", "giddy", "happy",
            "enthusiastic", "energetic", "joyful", "influential", "dramatic", "lighthearted",
            "positive-minded"],
        nouns: ["energizer", "optimist", "encourager", "influencer", "comedian",
            "performer", "celebrator", "recognizer", "enthusiast", "promoter"]
    },
    {
        theme: "Relator", domain: "relationship",
        adjectives: ["friendly", "caring", "authentic", "genuine", "intimate",
            "transparent", "truthful", "revealing"],
        nouns: ["friend", "family member", "loyalist", "caretaker"]
    },
    {
        theme: "Responsibility", domain: "executing",
        adjectives: ["diligent", "conscientious", "judgmental", "loyal", "driven",
            "dutiful", "dependable", "serious", "committed", "self-sacrificing",
            "responsive", "independent"],
        nouns: ["owner", "committer", "servant", "responder", "perfectionist",
            "judge", "volunteer", "controller"]
    },
    {
        theme: "Restorative", domain: "executing",
        adjectives: ["problem-oriented", "driven", "investigative", "weakness-oriented",
            "responsive", "unintimidated", "insightful"],
        nouns: ["fixer", "diagnoser", "troubleshooter", "investigator", "rehabilitator",
            "resuscitator"]
    },
    {
        theme: "Self-Assurance", domain: "influencing",
        adjectives: ["independent", "certain", "confident", "self-aware", "self-sufficient",
            "instinctive", "intense", "controlling", "stable", "persistent"],
        nouns: ["influencer", "controller", "director", "risk-taker", "leader"]
    },
    {
        theme: "Significance", domain: "influencing",
        adjectives: ["admired", "credible", "successful", "visible", "influential",
            "desirous", "independent", "audience-oriented", "professional", "exceptional"],
        nouns: ["reacher", "performer", "seeker", "yearner", "star", "craver", "desirer",
            "claimer"]
    },
    {
        theme: "Strategic", domain: "strategy",
        adjectives: ["creative", "clear", "option-aware", "intuitive", "future-oriented",
            "anticipating", "selective", "thoughtful", "insightful"],
        nouns: ["selector", "thinker", "strategist", "culler", "sorter", "evaluator",
            "mapmaker", "pathfinder", "planner"]
    },
    {
        theme: "WOO", domain: "influencing",
        adjectives: ["charming", "interactive", "socially proactive", "influential",
            "outgoing", "gregarious", "engaging", "initiating", "winsome", "socially energetic"],
        nouns: ["socializer", "charmer", "conversationalist", "greeter", "engager",
            "initiator", "networker", "prospector"]
    }
];
