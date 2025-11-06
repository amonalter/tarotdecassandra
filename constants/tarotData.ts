import type { ReadingSpread, TarotCardData, Language } from '../types';

// Fix: Renamed SPREADS_DATA to SPREADS and exported it.
export const SPREADS: Record<Language, ReadingSpread[]> = {
  'en': [
    {
      name: 'Single Card Draw',
      cardCount: 1,
      positions: ['Guidance for the Day'],
      description: 'Quick guidance for a specific question or your day.'
    },
    {
      name: 'Past, Present, Future',
      cardCount: 3,
      positions: ['Past', 'Present', 'Future'],
      description: 'Understand the flow of events and influences in your life.'
    },
    {
      name: 'Mind, Body, Spirit',
      cardCount: 3,
      positions: ['Mind', 'Body', 'Spirit'],
      description: 'A check-in on your personal alignment and well-being.'
    },
     {
      name: 'Relationship Spread',
      cardCount: 5,
      positions: ["You", "The Other Person", "The Connection", "The Challenge", "Potential Future"],
      description: "Analyze the dynamics and potential of a relationship."
    },
    {
      name: 'Decision Making',
      cardCount: 5,
      positions: ["The Situation", "Option 1", "Option 2", "Advice for Option 1", "Advice for Option 2"],
      description: "Gain clarity when faced with a difficult choice."
    },
    {
      name: 'Weekly Spread',
      cardCount: 7,
      positions: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      description: "Guidance and insight for each day of the upcoming week."
    },
    {
        name: 'The Horseshoe',
        cardCount: 7,
        positions: ["The Past", "The Present", "Hidden Influences", "Obstacles", "Attitude of Others", "What You Should Do", "The Outcome"],
        description: "A detailed look at a specific problem or situation."
    },
    {
      name: 'Celtic Cross',
      cardCount: 10,
      positions: [
        'The Present', 'The Challenge', 'The Past', 'The Future',
        'Above (Conscious)', 'Below (Unconscious)', 'Advice',
        'External Influences', 'Hopes and Fears', 'The Outcome',
      ],
      description: 'A deep and comprehensive look into a complex situation.'
    },
  ],
  'pt-br': [
    {
      name: 'Tiragem de Uma Carta',
      cardCount: 1,
      positions: ['Orientação para o Dia'],
      description: 'Orientação rápida para uma questão específica ou para o seu dia.'
    },
    {
      name: 'Passado, Presente, Futuro',
      cardCount: 3,
      positions: ['Passado', 'Presente', 'Futuro'],
      description: 'Entenda o fluxo de eventos e influências em sua vida.'
    },
    {
      name: 'Mente, Corpo, Espírito',
      cardCount: 3,
      positions: ['Mente', 'Corpo', 'Espírito'],
      description: 'Uma verificação do seu alinhamento pessoal e bem-estar.'
    },
    {
      name: 'Tiragem de Relacionamento',
      cardCount: 5,
      positions: ["Você", "A Outra Pessoa", "A Conexão", "O Desafio", "Futuro Potencial"],
      description: "Analise a dinâmica e o potencial de um relacionamento."
    },
    {
      name: 'Tomada de Decisão',
      cardCount: 5,
      positions: ["A Situação", "Opção 1", "Opção 2", "Conselho para Opção 1", "Conselho para Opção 2"],
      description: "Obtenha clareza ao enfrentar uma escolha difícil."
    },
    {
      name: 'Tiragem Semanal',
      cardCount: 7,
      positions: ["Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado", "Domingo"],
      description: "Orientação e insight para cada dia da semana que vem."
    },
    {
        name: 'A Ferradura',
        cardCount: 7,
        positions: ["O Passado", "O Presente", "Influências Ocultas", "Obstáculos", "Atitude dos Outros", "O que Você Deve Fazer", "O Resultado"],
        description: "Uma análise detalhada de um problema ou situação específica."
    },
    {
      name: 'Cruz Celta',
      cardCount: 10,
      positions: [
        'O Presente', 'O Desafio', 'O Passado', 'O Futuro',
        'Acima (Consciente)', 'Abaixo (Inconsciente)', 'Conselho',
        'Influências Externas', 'Esperanças e Medos', 'O Resultado',
      ],
      description: 'Uma análise profunda e abrangente de uma situação complexa.'
    },
  ],
};

export const CARDS: Record<Language, TarotCardData[]> = {
  'en': [
    // Major Arcana
    {
      name: "The Fool",
      meaning_up: "Beginnings, innocence, spontaneity, a free spirit",
      meaning_rev: "Holding back, recklessness, risk-aversion",
      desc: "Represents new beginnings, having faith in the future, being inexperienced, not knowing what to expect, having beginner's luck, improvisation and believing in the universe.",
      interpretation_up: "This card encourages you to embrace the unknown and take a leap of faith. It's a sign of new beginnings, boundless potential, and the freedom that comes with a fresh start. You are at the precipice of a new journey, and the universe is inviting you to trust your instincts and follow your heart, even if the path ahead is not clear. Release any fears or anxieties that are holding you back. Like The Fool, you should step forward with a sense of wonder and optimism. This is a time for spontaneity and embracing the unexpected. Don't be afraid to be a beginner again; there is wisdom in innocence and great power in starting with a clean slate.",
      interpretation_rev: "When reversed, this card serves as a warning against recklessness or naivety. You might be acting without considering the consequences, or perhaps you are being held back by a deep-seated fear of the unknown. It's time to pause and reflect. Are you being too impulsive, or are you paralyzed by indecision? This card asks you to find a balance. Don't let fear prevent you from starting your journey, but also ensure you've packed the essentials. A little planning and foresight can prevent a foolish misstep. It's about taking a calculated risk, not a blind one."
    },
    {
      name: "The Magician",
      meaning_up: "Manifestation, resourcefulness, power, inspired action",
      meaning_rev: "Manipulation, poor planning, untapped talents",
      desc: "Represents the power to manifest your desires through skill, concentration, and action. It is a card of creation and willpower.",
      interpretation_up: "You have all the tools and resources you need to make your dreams a reality. This card is a powerful sign of manifestation and willpower. The universe is telling you that now is the time to take inspired action. Your ability to combine the spiritual with the material is at its peak. Focus your energy, concentrate on your goals, and watch as your intentions take form. This is not about passive wishing; it's about active creation. You are the conduit between the heavens and the earth. Use your skills, your intellect, and your creativity to shape your world. Believe in your power, for you are the magician of your own life.",
      interpretation_rev: "Reversed, The Magician warns of untapped potential or the misuse of power. You may be feeling powerless, or perhaps you are using your skills for manipulation or deceit. It's a sign that you are out of touch with your inner power and need to reconnect with your true intentions. Are you experiencing creative blocks or a lack of focus? This card suggests that you may not be using your full potential. It's time to look within and identify what's holding you back. Avoid taking shortcuts or using trickery to achieve your goals, as this will only lead to negative consequences. Realign with your authentic self and use your power for good."
    },
    {
      name: "The High Priestess",
      meaning_up: "Intuition, sacred knowledge, divine feminine, the subconscious mind",
      meaning_rev: "Secrets, disconnected from intuition, withdrawal and silence",
      desc: "Represents intuition, subconscious, and mystery. She sits between the pillars of light and dark, suggesting she is a mediator of the conscious and subconscious realms.",
      interpretation_up: "It's time to look beyond the surface and trust your intuition. This card is a call to listen to your inner voice and connect with your subconscious mind. There is a world of sacred knowledge and wisdom within you, waiting to be discovered. The answers you seek are not in the external world, but in the quiet depths of your own soul. Pay attention to your dreams, synchronicities, and gut feelings. The High Priestess encourages you to embrace the mystery and the unknown. This is a time for quiet contemplation and introspection, not for action. Be patient and allow the hidden truths to reveal themselves to you.",
      interpretation_rev: "When reversed, this card suggests that you are disconnected from your intuition. You may be ignoring your inner voice in favor of external opinions or logic. This can lead to confusion, doubt, and a sense of being lost. It's a sign that you need to slow down and reconnect with your inner self. Perhaps you are withholding secrets, or secrets are being kept from you. This card can also indicate a refusal to face the truth. It's time to be honest with yourself and others. Stop ignoring the red flags and listen to what your gut is telling you. The truth may be difficult, but it will set you free."
    },
    {
      name: "The Empress",
      meaning_up: "Femininity, beauty, nature, nurturing, abundance",
      meaning_rev: "Creative block, dependence on others",
      desc: "Represents motherhood, fertility, and abundance. She is a creator, a nurturer, and a provider, embodying the lushness of nature and the material world.",
      interpretation_up: "This card is a beautiful sign of abundance, creativity, and nurturing. You are in a period of growth and fertility, whether it's in your relationships, career, or creative pursuits. It's a time to connect with your feminine energy, embrace beauty, and indulge in the pleasures of life. The Empress encourages you to nurture yourself and others with love and compassion. Spend time in nature and allow its beauty to inspire you. This is a powerful time for creation and bringing new ideas to life. Trust in the abundance of the universe and know that you are supported. You have the power to create a life of comfort, joy, and prosperity.",
      interpretation_rev: "Reversed, The Empress can indicate a creative block or a feeling of stagnation. You may be feeling disconnected from your creative energy or neglecting your own needs. This card can also point to an over-reliance on others or a smothering kind of love. It's a sign that you need to find balance and reconnect with your own source of abundance. Are you putting everyone else's needs before your own? It's time for some self-care. Nurture yourself with the same love and attention you give to others. If you're feeling uninspired, try spending time in nature or exploring new creative outlets. Reclaim your independence and remember that you are the creator of your own happiness."
    },
    {
      name: "The Emperor",
      meaning_up: "Authority, establishment, structure, a father figure",
      meaning_rev: "Domination, excessive control, lack of discipline, inflexibility",
      desc: "Represents authority, structure, and control. He is a figure of power and leadership, who rules with a firm hand and brings order to chaos.",
      interpretation_up: "This card signifies a time for structure, discipline, and authority. You are being called to take control of your life and create a solid foundation for your future. The Emperor represents leadership, stability, and the power of logical thinking. It's a sign that you need to be organized, disciplined, and strategic in your approach. Embrace your inner leader and don't be afraid to take charge. This is a time for setting boundaries, making clear decisions, and bringing order to chaos. You have the power to create the life you want, but it requires a firm hand and a clear vision. Trust in your ability to lead and build something that lasts.",
      interpretation_rev: "When reversed, The Emperor warns of an abuse of power or a lack of control. You may be acting like a tyrant, or perhaps you are struggling with a lack of discipline and direction. This can indicate a rigid and inflexible attitude, or a chaotic and unstructured life. It's a sign that you need to find balance. Are you being too controlling or, conversely, too passive? It's time to examine your relationship with power and authority. If you are being too rigid, learn to be more flexible and open to change. If you are lacking discipline, it's time to create some structure in your life. True power comes from a balance of control and compassion."
    },
    {
      name: "The Hierophant",
      meaning_up: "Spiritual wisdom, religious beliefs, conformity, tradition, institutions",
      meaning_rev: "Personal beliefs, freedom, challenging the status quo",
      desc: "Represents tradition, established institutions, and group identity. He is a spiritual teacher who bridges the gap between the divine and humanity.",
      interpretation_up: "This is a time to connect with tradition and established wisdom. This card represents a path of learning from a trusted source, whether it's a spiritual teacher, a mentor, or an educational institution. You are being guided to follow a structured path that has been tested and proven over time. It's a time for conformity and finding your place within a group. Embrace the comfort and guidance that tradition can offer. There is value in learning from the wisdom of the past. This may be a time for spiritual exploration within a structured belief system or for committing to a conventional path that will bring you a sense of belonging and purpose.",
      interpretation_rev: "Reversed, The Hierophant encourages you to challenge the status quo and to think for yourself. You may be feeling constrained by tradition and societal expectations. This is a time to question the rules and to forge your own path, even if it means going against the grain. Your personal beliefs are more important than conforming to the group. It's time for a spiritual rebellion. Break free from dogma and find a path that is true to your own soul. You are your own guru. Trust in your inner wisdom and have the courage to challenge authority. Freedom comes from living in alignment with your own authentic truth."
    },
    {
      name: "The Lovers",
      meaning_up: "Love, harmony, relationships, values alignment, choices",
      meaning_rev: "Self-love, disharmony, imbalance, misalignment of values",
      desc: "Represents love, partnerships, and choices. It is a card of union, harmony, and the importance of making decisions that are aligned with your heart.",
      interpretation_up: "A powerful and harmonious union is at the heart of your current situation. This card represents a deep connection with another person, built on love, mutual respect, and shared values. It can also signify a critical choice that you must make, one that requires you to be true to your own heart and values. This is a time of beautiful alignment, both in your relationships and within yourself. Embrace the love and harmony that surrounds you. If you are facing a choice, listen to your heart and choose the path that is most in alignment with your authentic self. This is not just about romantic love; it's about creating harmonious connections in all areas of your life. When you are true to yourself, you will attract relationships that reflect that same level of integrity.",
      interpretation_rev: "When reversed, The Lovers can indicate disharmony, conflict, and a misalignment of values. There may be a lack of balance in your relationships, or you may be struggling with a choice that has no clear right answer. This can also be a sign that you have lost touch with your own values and are not acting in alignment with your true self. This is a call for self-love and a re-evaluation of your relationships. Are your partnerships built on a foundation of mutual respect? Are you being true to your own heart? It's time to have honest conversations, both with yourself and with others, to restore a sense of harmony and balance. A relationship cannot thrive if the individuals within it are not being true to themselves."
    },
    {
      name: "The Chariot",
      meaning_up: "Control, willpower, victory, assertion, determination",
      meaning_rev: "Self-discipline, opposition, lack of direction",
      desc: "Represents willpower, determination, and victory. It is about overcoming obstacles and moving forward with confidence and control.",
      interpretation_up: "You are in the driver's seat, and it's time to move forward with determination and willpower. This card is a powerful sign of victory, control, and overcoming obstacles through sheer force of will. You have a clear destination in mind, and you have the ambition and self-discipline to get there. The opposing forces in your life are now under your control, and you are able to steer them in the same direction. This is a time for confident action and a single-minded focus on your goals. Don't let anything stand in your way. You have the power to overcome any challenge that comes your way. Stay focused, stay determined, and you will achieve the victory you seek. You are the master of your own destiny.",
      interpretation_rev: "Reversed, The Chariot warns of a lack of control and direction. You may be feeling powerless, as if you are being pulled in multiple directions at once. Or perhaps you are charging forward with aggression and a lack of self-discipline, which is only creating more obstacles. This can lead to a feeling of being stuck and frustrated. It's time to regain control of your life. This requires inner discipline and a clear sense of direction. What is your true goal? Once you have a clear destination in mind, you can begin to harness the opposing forces in your life and to move them in the same direction. True power is not about aggression; it's about controlled and focused action."
    },
    {
      name: "Strength",
      meaning_up: "Strength, courage, patience, control, compassion",
      meaning_rev: "Inner strength, self-doubt, low energy, raw emotion",
      desc: "Represents inner strength, courage, and compassion. It is about taming one's inner beast with gentleness and patience, not brute force.",
      interpretation_up: "You possess a deep well of inner strength and courage. This card is not about brute force, but about the power of a gentle and compassionate heart. You are able to face your fears and to tame your own inner demons with patience and self-control. This is a time of quiet confidence and a mastery of your own emotions and instincts. Your true strength lies in your ability to be compassionate, both with yourself and with others. You have the courage to be vulnerable and the resilience to overcome any challenge. Trust in your inner power and know that you are stronger than you think. You are a gentle warrior, and your compassion is your greatest weapon.",
      interpretation_rev: "When reversed, the Strength card can indicate a feeling of weakness and self-doubt. You may be feeling overwhelmed by your own emotions and instincts, and you may be questioning your ability to cope. This can lead to low energy and a feeling of being out of control. It's time to reconnect with your inner strength. This is not about suppressing your emotions, but about learning to understand and to work with them. Practice self-compassion and be gentle with yourself. You may need to take some time to rest and to recharge your batteries. Your strength is still there; you just need to find it again."
    },
    {
      name: "The Hermit",
      meaning_up: "Soul-searching, introspection, being alone, inner guidance",
      meaning_rev: "Isolation, loneliness, withdrawal",
      desc: "Represents introspection, soul-searching, and seeking inner guidance. It is a time for withdrawal from the outer world to find wisdom within.",
      interpretation_up: "It's time to turn your attention inward and to seek the wisdom that lies within your own soul. This card represents a period of introspection, soul-searching, and a temporary withdrawal from the outside world. You are on a quest for inner guidance, and you will not find it in the noise and distractions of everyday life. You must be willing to walk your path alone for a while. Embrace this time of solitude. It is not a sign of loneliness, but an opportunity for profound self-discovery. Your inner light will guide you through the darkness. Trust in your own wisdom and have the courage to listen to what your soul is telling you. The answers are within.",
      interpretation_rev: "Reversed, The Hermit can indicate a period of forced isolation or loneliness. You may have withdrawn too much from the world, and now you are feeling disconnected and lost. Or perhaps you are avoiding introspection and are afraid to face your own inner demons. This can lead to a feeling of being stuck in the dark. It's time to come out of your cave. If you are feeling lonely, reach out to trusted friends or family for support. If you are avoiding your inner work, have the courage to face what you have been hiding from. You don't have to be alone forever, but you do need to be willing to do the inner work to find your way back to the light."
    },
    {
      name: "Wheel of Fortune",
      meaning_up: "Good luck, karma, life cycles, destiny, a turning point",
      meaning_rev: "Bad luck, resistance to change, breaking cycles",
      desc: "Represents the cyclical nature of life, destiny, and turning points. It is a reminder that life is always in motion and that what goes around, comes around.",
      interpretation_up: "Life is in a state of flux, and a significant turning point is upon you. This card is a powerful symbol of destiny, luck, and the cyclical nature of life. The wheel is turning in your favor, bringing with it new opportunities and positive changes. This is a time to go with the flow and to trust in the a greater plan. What goes up must come down, but for now, you are on the ascent. Embrace this period of good fortune and remember that life is always changing. Be grateful for the blessings that are coming your way and know that you are exactly where you need to be.",
      interpretation_rev: "When reversed, the Wheel of Fortune can indicate a period of bad luck or a resistance to change. You may be feeling like you are stuck in a negative cycle, or perhaps you are trying to control things that are beyond your control. This can lead to a feeling of powerlessness and frustration. It's time to let go of your attachment to a specific outcome and to accept that change is an inevitable part of life. You may be at the bottom of the wheel right now, but it will not stay there forever. This is an opportunity to learn from your mistakes and to break free from negative patterns. Have faith that the wheel will turn again."
    },
    {
      name: "Justice",
      meaning_up: "Justice, fairness, truth, cause and effect, law",
      meaning_rev: "Unfairness, lack of accountability, dishonesty",
      desc: "Represents truth, fairness, and the law of cause and effect. It is a reminder that our actions have consequences and that the truth will always come to light.",
      interpretation_up: "The truth is being revealed, and a just and fair outcome is at hand. This card is a powerful symbol of integrity, fairness, and the law of cause and effect. You are being called to act with honesty and to take responsibility for your actions. If you have been wronged, trust that justice will be served. If you are facing a difficult decision, choose the path of truth and integrity. The scales will be balanced, and you will reap what you have sown. This is a time for clarity, objectivity, and a commitment to doing what is right. The truth will set you free.",
      interpretation_rev: "Reversed, the Justice card can indicate a period of injustice, dishonesty, and a lack of accountability. You may be experiencing the consequences of past actions, or perhaps you are being treated unfairly. This can lead to a feeling of resentment and a sense of being a victim. It's time to take a hard look at your own actions and to be honest with yourself. Are you avoiding responsibility? Are you blaming others for your own mistakes? It is also a call to fight for what is right, even if it is difficult. Stand up for your beliefs and demand the fairness you deserve. Do not let dishonesty go unchallenged."
    },
    {
      name: "The Hanged Man",
      meaning_up: "Pause, surrender, letting go, new perspectives",
      meaning_rev: "Delays, resistance, stalling, indecision",
      desc: "Represents a period of suspension, letting go, and seeing things from a new perspective. It is a time for pause and surrender, not for action.",
      interpretation_up: "It's time to press pause and to see things from a different perspective. This card represents a period of surrender, letting go, and a voluntary suspension of action. You may be feeling stuck, but this is not a time for struggle. It is an opportunity to release your attachment to a specific outcome and to see your situation in a new light. By letting go of control, you will gain a deeper understanding and a sense of inner peace. This is a time for patience and reflection. The answers will come when you stop fighting and start surrendering.",
      interpretation_rev: "When reversed, The Hanged Man can indicate a period of stubborn resistance and a refusal to let go. You may be stalling and avoiding a necessary sacrifice, which is only prolonging your suffering. This can lead to a feeling of being stuck in a rut and a sense of frustration. It's time to stop resisting and to accept what you cannot change. You are being asked to make a sacrifice, and the longer you delay, the more difficult it will become. Let go of your pride and your attachment to being right. Surrender is not a sign of weakness; it is an act of courage."
    },
    {
      name: "Death",
      meaning_up: "Endings, change, transformation, transition",
      meaning_rev: "Resistance to change, personal transformation, inner purging",
      desc: "Represents an ending, a transformation, and the closing of a chapter. It is a card of profound change and the necessary release of the old to make way for the new.",
      interpretation_up: "A significant and necessary ending is upon you, but do not be afraid. This card is not about literal death; it is about transformation, change, and the closing of one chapter to make way for a new one. This is a time for profound release and the shedding of old skin. You are being asked to let go of what no longer serves you, whether it's a relationship, a job, or an old belief system. This ending may be painful, but it is essential for your growth. Embrace this transformation and know that on the other side of this death is a beautiful rebirth.",
      interpretation_rev: "Reversed, the Death card can indicate a powerful resistance to change. You may be clinging to the past and refusing to let go, which is only causing you more pain and stagnation. This can lead to a feeling of being stuck in a limbo, unable to move forward. It's time to face your fears and to embrace the inevitable. Change is coming, whether you like it or not. The more you resist, the more difficult it will be. This is also a sign of a deep inner purging. You are being called to release old patterns and to transform from the inside out. It's time for a spiritual detox."
    },
    {
      name: "Temperance",
      meaning_up: "Balance, moderation, patience, purpose",
      meaning_rev: "Imbalance, excess, self-healing, re-alignment",
      desc: "Represents balance, moderation, and finding the middle ground. It is about blending opposing forces to create something new and harmonious.",
      interpretation_up: "You are finding a beautiful sense of balance and harmony in your life. This card is a sign of moderation, patience, and a blending of opposing forces. You are learning to walk the middle path and to integrate all aspects of yourself. This is a time of healing, peace, and a deep sense of purpose. You have a clear vision of your goals, and you are taking a calm and steady approach to achieving them. Your patience and moderation are your greatest strengths right now. Trust in the process and know that you are on the right path.",
      interpretation_rev: "When reversed, the Temperance card can indicate a period of imbalance and excess. You may be swinging between extremes, or perhaps you are indulging in unhealthy habits. This can lead to a feeling of being out of control and a lack of purpose. It's time to find your center and to restore a sense of balance. This is a call for self-healing and re-alignment. Take a step back and examine where you are out of balance. Are you working too much or not enough? Are you giving too much or not enough? It's time to bring all aspects of your life back into harmony."
    },
    {
      name: "The Devil",
      meaning_up: "Shadow self, attachment, addiction, restriction, sexuality",
      meaning_rev: "Releasing limiting beliefs, exploring dark thoughts, detachment",
      desc: "Represents addiction, materialism, and the attachments that bind us. It is a card of temptation and the shadow self, but also a call to reclaim one's power.",
      interpretation_up: "It's time to confront your shadow self and the chains that bind you. This card represents addiction, attachment, and the limiting beliefs that are holding you back. You may be feeling trapped by your own desires, or perhaps you have given your power away to something or someone else. This is a powerful call to reclaim your freedom. The first step is to acknowledge your chains. What are you addicted to? What are you afraid to let go of? The Devil is a powerful teacher, and he is showing you where you are not free. It's time to break the chains and to take back your power.",
      interpretation_rev: "Reversed, The Devil can indicate a powerful breakthrough and a release from bondage. You are becoming aware of your limiting beliefs and are ready to let them go. This is a time of profound detachment and a reclaiming of your personal power. You are no longer a slave to your desires; you are the master of your own destiny. This is a time of liberation and a deep exploration of your own shadow self. You are not afraid to look into the darkness, for you know that it is where you will find your greatest strength. You are breaking free."
    },
    {
      name: "The Tower",
      meaning_up: "Sudden change, upheaval, chaos, revelation, awakening",
      meaning_rev: "Personal transformation, fear of change, averting disaster",
      desc: "Represents sudden and disruptive change. It is a card of chaos, upheaval, and the destruction of false structures, leading to a powerful awakening.",
      interpretation_up: "Brace yourself for a sudden and dramatic change. This card represents a powerful and often shocking upheaval that is designed to shake you to your core. The foundations of your life are being challenged, and what you thought was true is being revealed as false. This may be a painful and chaotic experience, but it is ultimately for your highest good. The Tower is a divine intervention, designed to break you free from a prison you may not have even known you were in. This is a powerful awakening, and on the other side of this destruction is a newfound sense of freedom and truth.",
      interpretation_rev: "When reversed, The Tower can indicate a fear of change and a desperate attempt to avoid disaster. You may be clinging to a situation that is no longer sustainable, and you are resisting the inevitable. This can lead to a prolonged period of anxiety and a sense of impending doom. It's time to let go and to allow the tower to fall. The longer you resist, the more painful it will be. This can also be a sign that you are a powerful agent of change, and you are being called to tear down old structures in your own life. You are the lightning, and it's time to strike."
    },
    {
      name: "The Star",
      meaning_up: "Hope, faith, purpose, renewal, spirituality",
      meaning_rev: "Lack of faith, despair, self-trust, disconnection",
      desc: "Represents hope, inspiration, and a renewed sense of purpose. It is a card of healing and a reminder that there is always light in the darkness.",
      interpretation_up: "After a period of darkness, a star of hope has appeared. This card is a beautiful sign of faith, renewal, and a deep connection to the divine. You are being guided by a sense of purpose, and you are filled with a quiet sense of optimism. This is a time of healing, inspiration, and a replenishment of your spirit. The universe is on your side, and you are being blessed with a renewed sense of hope. Trust in the future and know that you are on the right path. You are a shining star, and it's time to let your light shine.",
      interpretation_rev: "Reversed, The Star can indicate a feeling of hopelessness and a lack of faith. You may have lost your connection to your own inner guidance, and you are feeling lost in the dark. This can lead to a sense of despair and a feeling of being abandoned by the universe. It's time to reconnect with your own inner light. The star is still there; you just need to look for it. This is a call for self-trust and a reminder that you have the power to create your own hope. Don't give up. The dawn is coming."
    },
    {
      name: "The Moon",
      meaning_up: "Illusion, fear, anxiety, subconscious, intuition",
      meaning_rev: "Release of fear, repressed emotion, inner confusion",
      desc: "Represents illusion, fear, and the subconscious mind. It is a card of mystery and a reminder that not everything is as it seems.",
      interpretation_up: "Things are not as they seem, and you must rely on your intuition to navigate the path ahead. This card represents a journey into the depths of your own subconscious, where you will encounter both your deepest fears and your greatest wisdom. The Moon is a card of illusion, mystery, and a heightened sense of intuition. You may be feeling anxious and uncertain, but this is a time to trust your gut feelings. Pay attention to your dreams and the subtle signs that the universe is sending you. The path may be dark, but your inner light will guide you.",
      interpretation_rev: "When reversed, The Moon can indicate a release of fear and a lifting of illusion. The darkness is beginning to recede, and you are starting to see things more clearly. This is a time of emotional release and a willingness to confront your repressed emotions. You are no longer a prisoner of your own fears. This can also be a sign of inner confusion and a struggle to distinguish between reality and illusion. It's time to ground yourself and to seek clarity. Trust in your intuition, but also use your logic to discern the truth."
    },
    {
      name: "The Sun",
      meaning_up: "Positivity, fun, warmth, success, vitality",
      meaning_rev: "Inner child, feeling down, overly optimistic",
      desc: "Represents joy, success, and pure positivity. It is a card of vitality, enlightenment, and the simple pleasures of life.",
      interpretation_up: "Let the sunshine in! This is one of the most positive cards in the deck, and it is a powerful sign of success, joy, and vitality. The darkness has passed, and you are now basking in the warm glow of enlightenment. This is a time of celebration, optimism, and a deep sense of gratitude. Embrace your inner child and find joy in the simple pleasures of life. You are on the right path, and everything is going to be okay. Your future is bright, and you deserve all the happiness that is coming your way.",
      interpretation_rev: "Reversed, The Sun can indicate a feeling of sadness or a temporary setback. You may be struggling to find joy in your life, or perhaps you are being overly optimistic and are not facing reality. This can lead to a feeling of being disconnected from your own inner light. It's time to reconnect with your inner child and to find what truly brings you joy. This is not a time for pessimism, but for a more realistic and grounded form of optimism. The sun is still there, even if it is behind the clouds. It's time to find your way back to the light."
    },
    {
      name: "Judgement",
      meaning_up: "Judgement, rebirth, inner calling, absolution",
      meaning_rev: "Self-doubt, inner critic, ignoring the call",
      desc: "Represents a moment of reckoning, a spiritual awakening, and a call to a higher purpose. It is a card of rebirth and absolution.",
      interpretation_up: "You are at a major crossroads, and a final decision is at hand. This card represents a moment of awakening, a call to a higher purpose, and a judgement of your past actions. This is not a time for guilt or regret, but for a clear-eyed assessment of where you have been and where you are going. You are being called to rise up and to embrace a new level of consciousness. This is a time of rebirth and absolution. Let go of the past and answer the call of your soul. A new and more authentic life is waiting for you.",
      interpretation_rev: "When reversed, the Judgement card can indicate a struggle with self-doubt and a harsh inner critic. You may be judging yourself too harshly, or perhaps you are ignoring a clear call from your higher self. This can lead to a feeling of being stuck in the past and an inability to move forward. It's time to forgive yourself and to let go of self-criticism. You are being given a second chance, but you must be willing to take it. Listen to your inner voice and have the courage to answer the call. It's time to rise up."
    },
    {
      name: "The World",
      meaning_up: "Completion, integration, accomplishment, travel",
      meaning_rev: "Seeking personal closure, short-cuts, delays",
      desc: "Represents the completion of a cycle, a successful conclusion, and a sense of wholeness. It is a card of integration, accomplishment, and a celebration of life.",
      interpretation_up: "You have reached a significant milestone and a successful completion of a cycle. This is a time for celebration, accomplishment, and a deep sense of wholeness. You have integrated all the lessons you have learned, and you are now ready to enjoy the fruits of your labor. The world is at your feet, and new opportunities are opening up for you. This can also be a sign of literal travel and an expansion of your horizons. Embrace this moment of completion and know that you have done well. You are in perfect alignment with the universe.",
      interpretation_rev: "Reversed, The World can indicate a lack of closure and a feeling of incompleteness. You may have taken shortcuts or have not fully learned the lessons of this cycle. This can lead to a feeling of being stuck and an inability to move on to the next chapter. It's time to go back and to tie up any loose ends. What is holding you back from a sense of completion? This is a call to find personal closure and to do the necessary work to finish what you have started. Don't be afraid to go back to the beginning. The world is waiting for you, but you must be ready to embrace it."
    },
    // Wands
    {
      name: "Ace of Wands",
      meaning_up: "Inspiration, new opportunities, growth, potential",
      meaning_rev: "Delays, lack of motivation, feeling weighed down",
      desc: "The Ace of Wands represents a spark of new energy and potential. It's a symbol of a new idea, a burst of inspiration, or the beginning of a passionate new venture.",
      interpretation_up: "A surge of creative energy and inspiration is flowing to you now. This card is a green light from the universe, signaling the start of something new and exciting. It could be a new project, a new passion, or a new level of personal growth. This is the moment to seize the opportunity and take that first step. Your potential is limitless right now. Trust your instincts, embrace this new beginning, and allow your creativity to shine. Don't hesitate; the time for action is now. Plant the seed of your new idea and watch it grow.",
      interpretation_rev: "When reversed, the Ace of Wands suggests that you're feeling uninspired or that your creative energy is blocked. You may have a great idea, but you're struggling to get it off the ground. Delays and frustrations are common when this card appears reversed. It's a sign that you need to find a new source of inspiration or to clear away whatever is holding you back. Are you feeling weighed down by too many responsibilities? It's time to find a way to reignite your inner fire. Don't be afraid to take a break and to come back to your project with fresh eyes."
    },
    {
      name: "Two of Wands",
      meaning_up: "Future planning, making decisions, leaving home, personal power",
      meaning_rev: "Fear of the unknown, lack of planning, playing it safe",
      desc: "The Two of Wands is about planning for the future and making choices. It's a card of foresight and the courage to step out into the world.",
      interpretation_up: "You are at a crossroads, and it's time to make a plan for the future. You've already achieved a level of success, but now you're looking to expand your horizons. This card encourages you to think big and to not be afraid to step out of your comfort zone. You have the world in your hands, and it's time to decide what you want to do with it. This is a time for bold decisions and for trusting in your own personal power. Make a plan, set your goals, and get ready to take on the world. Your future is waiting for you.",
      interpretation_rev: "Reversed, the Two of Wands can indicate a fear of the unknown that is holding you back. You may be afraid to leave your comfort zone, or you may be struggling with a lack of planning and foresight. This can lead to a feeling of being stuck and indecisive. It's a sign that you need to face your fears and to start thinking about the future. Don't let a fear of failure prevent you from pursuing your dreams. It's time to stop playing it safe and to start taking some calculated risks. You'll never know what you're capable of if you don't try."
    },
    {
      name: "Three of Wands",
      meaning_up: "Expansion, foresight, overseas opportunities, moving forward",
      meaning_rev: "Playing small, lack of foresight, unexpected delays",
      desc: "The Three of Wands signifies progress, expansion, and looking to the future with optimism. Your plans are in motion, and you're starting to see results.",
      interpretation_up: "Your ships are coming in. The plans you've set in motion are beginning to bear fruit, and it's time to look ahead to the next phase of your journey. This card is a sign of expansion, progress, and the exciting opportunities that lie on the horizon. You've done the hard work, and now you can enjoy the view as your efforts pay off. This may also be a sign of travel or overseas opportunities. Keep your eyes on the future and continue to move forward with confidence. The world is opening up to you.",
      interpretation_rev: "When reversed, the Three of Wands can suggest that you're playing it too small or that you're being held back by a lack of foresight. You may be missing out on opportunities because you're not looking far enough ahead. This can also indicate unexpected delays and frustrations. It's a sign that you need to re-evaluate your plans and to think bigger. Don't be afraid to dream. If you're facing setbacks, don't give up. Take some time to regroup and to come up with a new strategy. Your potential is greater than you think."
    },
    {
      name: "Four of Wands",
      meaning_up: "Celebration, joy, harmony, relaxation, homecoming",
      meaning_rev: "Personal celebration, inner harmony, conflict with others",
      desc: "The Four of Wands is a card of joyful celebration, harmony, and stability. It often represents a happy milestone, such as a wedding, a homecoming, or the successful completion of a project.",
      interpretation_up: "It's time to celebrate! This card is a wonderful sign of joy, harmony, and a well-deserved period of rest and relaxation. You've reached a significant milestone, and it's time to share your success with the people you love. This is a time for parties, gatherings, and a deep sense of community. Embrace this moment of happiness and allow yourself to enjoy the fruits of your labor. You've worked hard to create a stable and happy foundation, and now you can relax and enjoy it. Welcome home.",
      interpretation_rev: "Reversed, the Four of Wands can indicate a more private or personal celebration. You may be feeling a deep sense of inner harmony, but you're not yet ready to share it with the world. This can also be a sign of a breakdown in communication or a conflict with loved ones that is preventing a celebration. It's a sign that you need to find your own inner peace before you can celebrate with others. Take some time for yourself and focus on what brings you joy. Once you've found your own inner harmony, you'll be ready to share it with the world."
    },
    {
      name: "Five of Wands",
      meaning_up: "Conflict, disagreements, competition, tension, diversity",
      meaning_rev: "Conflict avoidance, finding common ground, releasing tension",
      desc: "The Five of Wands represents conflict, competition, and a clash of ideas or egos. It's a time of struggle and disagreement, but it can also lead to growth and a greater understanding.",
      interpretation_up: "You're in the midst of a conflict or a competition, and things are feeling a bit chaotic. This card represents a clash of wills, where everyone is fighting to be heard. While it can be a stressful time, it's also an opportunity for growth. This is a time to stand up for your beliefs, but also to listen to what others have to say. The key is to find a way to work together, despite your differences. Don't be afraid of a healthy debate. It can lead to a more creative and innovative solution in the end.",
      interpretation_rev: "When reversed, the Five of Wands can indicate a desire to avoid conflict at all costs. You may be suppressing your own needs and opinions to keep the peace, which can lead to resentment and a buildup of tension. This can also be a sign that a conflict is coming to an end, and you're ready to find common ground. It's a time for releasing tension and for finding a more peaceful way to resolve your differences. It's time to have an open and honest conversation to clear the air."
    },
    {
      name: "Six of Wands",
      meaning_up: "Success, public recognition, victory, progress, self-confidence",
      meaning_rev: "Private success, falling from grace, egotism",
      desc: "The Six of Wands is a card of victory, success, and public acclaim. You've overcome the challenges, and now you're being celebrated for your achievements.",
      interpretation_up: "You've earned your victory lap. This card is a powerful sign of success, public recognition, and a well-deserved moment in the spotlight. You've worked hard to overcome the challenges, and now it's time to enjoy the fruits of your labor. Your confidence is high, and you have every right to be proud of your accomplishments. Share your success with others and allow them to celebrate with you. This is a time of great progress and a sign that you are on the right path. Keep up the good work.",
      interpretation_rev: "Reversed, the Six of Wands can suggest a more private or personal success. You may have reached a significant goal, but you're not yet ready to share it with the world. This can also be a warning against egotism or a fear of failure. You may be so focused on maintaining your public image that you've lost touch with what's truly important. It can also indicate a fall from grace or a failure to live up to expectations. It's a sign that you need to find a more authentic and sustainable form of success, one that is not dependent on the approval of others."
    },
    {
      name: "Seven of Wands",
      meaning_up: "Challenge, competition, perseverance, protective, maintaining control",
      meaning_rev: "Giving up, feeling overwhelmed, overly protective",
      desc: "The Seven of Wands represents a challenge, a fight to protect your position, and the need for perseverance. You're being tested, but you have the strength to stand your ground.",
      interpretation_up: "You're in a position of strength, but you're being challenged by others. This is a time to stand your ground and to defend what you've worked so hard to achieve. You may feel like you're fighting an uphill battle, but you have the courage and the perseverance to succeed. Don't back down. Trust in your own abilities and continue to fight for what you believe in. This is a test of your strength and your convictions. You have what it takes to come out on top.",
      interpretation_rev: "When reversed, the Seven of Wands can indicate a feeling of being overwhelmed and a desire to give up. The challenges may seem too great, and you may be questioning your ability to succeed. This can also be a sign that you're being overly protective or defensive. It's a sign that you need to find a new source of strength and to re-evaluate your strategy. Are you fighting a battle that you can't win? It may be time to choose your battles more wisely. Or perhaps you need to ask for help. You don't have to do it all on your own."
    },
    {
      name: "Eight of Wands",
      meaning_up: "Speed, action, air travel, movement, swift change",
      meaning_rev: "Delays, frustration, resisting change, internal alignment",
      desc: "The Eight of Wands is a card of rapid action, movement, and communication. Things are happening quickly, and it's a time for progress and swift change.",
      interpretation_up: "Get ready for a whirlwind of activity. This card is a sign that things are moving forward at a rapid pace. You may be about to embark on a trip, or you may receive some important news that sets a chain of events in motion. This is a time of exciting progress and a sign that the universe is clearing the way for you to achieve your goals. Go with the flow and be prepared to act quickly. The time for waiting is over. It's time to take action and to make things happen.",
      interpretation_rev: "Reversed, the Eight of Wands can indicate a period of delays, frustration, and a resistance to change. You may be feeling stuck, as if your plans are not moving forward as quickly as you would like. This can lead to a feeling of impatience and a desire to force things to happen. It's a sign that you need to slow down and to be more patient. The universe has its own timing. This can also be a sign that you need to get your own life in order before you can move forward. It's time for some internal alignment."
    },
    {
      name: "Nine of Wands",
      meaning_up: "Resilience, courage, persistence, test of faith, boundaries",
      meaning_rev: "On the defensive, paranoia, hesitant, overwhelming challenges",
      desc: "The Nine of Wands represents resilience, courage, and the final push before victory. You're weary from the battle, but you're so close to the finish line.",
      interpretation_up: "You've been through a lot, but you're still standing. This card is a testament to your resilience, your courage, and your unwavering persistence. You may be feeling wounded and weary, but you're not ready to give up. You're so close to achieving your goal, and this is the final test of your faith. Gather your remaining strength and make one last push. You have the courage to see this through to the end. Don't be afraid to set boundaries and to protect yourself. You've come too far to quit now.",
      interpretation_rev: "When reversed, the Nine of Wands can indicate a feeling of being on the defensive and a sense of paranoia. You may be so afraid of getting hurt that you're pushing people away. This can also be a sign that you're hesitant to take the final step towards your goal. The challenges may seem overwhelming, and you may be questioning your ability to succeed. It's a sign that you need to let go of your fears and to trust in your own strength. You are more resilient than you think. It's time to let your guard down and to ask for help if you need it."
    },
    {
      name: "Ten of Wands",
      meaning_up: "Burden, extra responsibility, hard work, stress, achievement",
      meaning_rev: "Doing it all, carrying the burden, delegation, release",
      desc: "The Ten of Wands represents the heavy burden of responsibility and the stress of overwork. You've achieved your goal, but now you're carrying the weight of it all.",
      interpretation_up: "You've taken on a lot, and now you're feeling the weight of it all. This card is a sign that you're carrying a heavy burden of responsibility. You may have achieved a great deal, but it's come at a cost. You're feeling stressed, overworked, and on the verge of burnout. It's time to take a step back and to re-evaluate your priorities. Are you trying to do too much? It's time to learn to delegate and to ask for help. You don't have to carry this burden alone.",
      interpretation_rev: "Reversed, the Ten of Wands is a powerful call to release your burdens. You're finally realizing that you can't do it all on your own, and you're ready to let go of some of your responsibilities. This is a time of liberation and a sign that you're ready to find a more balanced and sustainable way of living. It's time to learn to say no and to set healthy boundaries. By releasing what is no longer yours to carry, you'll free up your energy for the things that truly matter."
    },
    {
      name: "Page of Wands",
      meaning_up: "Enthusiasm, exploration, discovery, free spirit",
      meaning_rev: "Creative blocks, redirecting energy, self-limiting beliefs",
      desc: "The Page of Wands is a messenger of new ideas and creative energy. He is a free spirit, full of enthusiasm and a desire for exploration.",
      interpretation_up: "A new idea or a new passion is calling to you. This card is a sign of creative inspiration and a desire to explore new territory. You're feeling enthusiastic and full of energy, and you're ready to embark on a new adventure. This is a time for discovery and for allowing your free spirit to lead the way. Don't be afraid to try something new or to take a different path. The universe is sending you a message of encouragement. Follow your passion and see where it takes you.",
      interpretation_rev: "When reversed, the Page of Wands can indicate a creative block or a feeling of being stuck. You may have a great idea, but you're not sure how to get started. This can also be a sign that you're holding yourself back with self-limiting beliefs. It's a sign that you need to find a way to redirect your energy. Are you focusing on the wrong things? It's time to get back in touch with what truly inspires you. Let go of your fears and allow yourself to dream again."
    },
    {
      name: "Knight of Wands",
      meaning_up: "Energy, passion, lust, action, adventure, impulsiveness",
      meaning_rev: "Passion project, haste, scattered energy, delays",
      desc: "The Knight of Wands is a figure of action, passion, and adventure. He is always on the move, chasing his next goal with a fiery and sometimes impulsive energy.",
      interpretation_up: "It's time to take action and to pursue your passions with a fiery enthusiasm. This card is a sign of a burst of energy and a desire for adventure. You're feeling bold, confident, and ready to take on the world. This is a time for action, not for contemplation. Don't be afraid to be a little impulsive. Sometimes you just have to go for it. Your passion is your guide, and it's leading you towards an exciting new chapter in your life. Embrace the adventure and enjoy the ride.",
      interpretation_rev: "Reversed, the Knight of Wands can warn against acting with too much haste or impulsiveness. You may be so eager to get started that you're not thinking things through. This can also indicate a feeling of scattered energy or a lack of focus. It's a sign that you need to slow down and to be more strategic in your approach. A passion project needs a solid plan to succeed. This can also indicate a period of frustrating delays. It's a time to be patient and to wait for the right moment to act."
    },
    {
      name: "Queen of Wands",
      meaning_up: "Courage, confidence, independence, social butterfly, determination",
      meaning_rev: "Self-respect, self-confidence, introverted, a burnout",
      desc: "The Queen of Wands is a vibrant and confident leader. She is independent, determined, and has a magnetic personality that draws people to her.",
      interpretation_up: "You are radiating confidence and a vibrant, magnetic energy. This card is a sign that you are in your power. You are courageous, independent, and determined to live life on your own terms. You have a natural ability to inspire others, and people are drawn to your warmth and your passion. This is a time to be social, to share your ideas, and to take the lead. You are the queen of your own life, and you have the power to create the reality you desire. Shine your light brightly.",
      interpretation_rev: "When reversed, the Queen of Wands can indicate a need to focus on self-confidence and self-respect. You may be feeling insecure or that you've lost your inner fire. This can also be a sign that you're feeling a bit more introverted and that you need some time to yourself to recharge. It's a warning against burnout. You may have been giving too much of your energy to others, and now it's time to focus on your own needs. It's time to reignite your own inner flame and to remember how powerful you truly are."
    },
    {
      name: "King of Wands",
      meaning_up: "Natural-born leader, vision, entrepreneur, honour, control",
      meaning_rev: "Impulsiveness, haste, ruthless, high expectations",
      desc: "The King of Wands is a visionary leader and a master of his own creative energy. He is bold, charismatic, and has a clear vision for the future.",
      interpretation_up: "You are a natural-born leader with a clear and inspiring vision for the future. This card is a sign that you have the power and the charisma to make your dreams a reality. You are not afraid to take risks, and you have a natural ability to inspire others to follow you. This is a time to take charge, to share your vision, and to lead with confidence and integrity. You have the power to create a lasting legacy. Trust in your vision and have the courage to bring it to life.",
      interpretation_rev: "Reversed, the King of Wands can warn against being too impulsive or ruthless in your pursuit of your goals. You may be so focused on your vision that you're not considering the impact of your actions on others. This can also indicate a tendency to set impossibly high expectations for yourself and for others. It's a sign that you need to find a more balanced and compassionate approach to leadership. True power is not about control; it's about inspiration. It's time to lead with your heart, as well as your head."
    },
    // Cups
    {
      name: "Ace of Cups",
      meaning_up: "Love, new relationships, compassion, creativity",
      meaning_rev: "Self-love, intuition, repressed emotions",
      desc: "The Ace of Cups represents a new beginning in the emotional realm. It's a symbol of love, compassion, and creativity flowing into your life.",
      interpretation_up: "A wave of positive emotional energy is coming your way. This card is a sign that your heart is open and ready to both give and receive love. It can signal the start of a new relationship, a deepening of an existing one, or a surge of creative inspiration. This is a time for compassion, both for yourself and for others. Let your emotions flow freely and trust in the power of your intuition. The universe is offering you a gift of love and happiness. Be open to receiving it.",
      interpretation_rev: "When reversed, the Ace of Cups suggests that you may be blocking your own emotional expression. You might be repressing your feelings or neglecting your own emotional needs. This is a call to focus on self-love and to listen to your intuition. Are you afraid to be vulnerable? It's time to explore what's holding you back from opening your heart. This card can also indicate a creative block or a feeling of being emotionally unfulfilled. It's a sign that you need to reconnect with your own inner wellspring of love and creativity."
    },
    {
      name: "Two of Cups",
      meaning_up: "Unified love, partnership, mutual attraction, connection",
      meaning_rev: "Break-up, disharmony, distrust, imbalance",
      desc: "The Two of Cups is a card of partnership and union. It represents a deep connection between two people, based on mutual respect, love, and understanding.",
      interpretation_up: "A powerful and harmonious connection is forming or deepening in your life. This card is a beautiful sign of a partnership built on mutual love and respect. It's a time of emotional balance and a deep understanding between two people. This can be a romantic relationship, a close friendship, or a successful business partnership. The key is the shared connection and the equal give and take. Embrace this union and celebrate the love that you share. You are stronger together.",
      interpretation_rev: "Reversed, the Two of Cups can indicate a breakdown in a relationship. There may be a lack of communication, a sense of imbalance, or a growing distrust. This can lead to arguments and a feeling of disconnection. It's a sign that you need to work on restoring harmony and balance in your partnership. It's time for an honest conversation to address the issues that are causing the rift. If you're single, this card can suggest that you're not yet ready for a balanced and healthy relationship."
    },
    {
      name: "Three of Cups",
      meaning_up: "Celebration, friendship, creativity, collaborations",
      meaning_rev: "Independence, alone time, gossip, overindulgence",
      desc: "The Three of Cups is a card of joyful celebration with friends and community. It's a time for shared happiness, creative collaboration, and a sense of belonging.",
      interpretation_up: "It's time to gather your friends and celebrate. This card is a sign of happy times, strong friendships, and a joyful sense of community. You are surrounded by people who love and support you, and it's time to share your happiness with them. This is also a great time for creative collaborations. Your combined energies can lead to something truly beautiful. Embrace this time of social connection and allow yourself to enjoy the simple pleasure of good company. Life is meant to be shared.",
      interpretation_rev: "When reversed, the Three of Cups can suggest a need for some alone time. You may be feeling a bit overwhelmed by social obligations and need some time to recharge. It can also be a warning against gossip or overindulgence. You may be spending too much time partying and not enough time focusing on your true priorities. In a creative sense, it can indicate a project that is better worked on alone. It's a sign that you need to find a balance between your social life and your personal needs."
    },
    {
      name: "Four of Cups",
      meaning_up: "Apathy, contemplation, disconnection, re-evaluation",
      meaning_rev: "Retreat, withdrawal, gratitude, new perspective",
      desc: "The Four of Cups represents a time of apathy and contemplation. You may be feeling disconnected from your emotions and uninterested in the opportunities around you.",
      interpretation_up: "You're being offered a gift, but you're not in the mood to receive it. This card is a sign of apathy, boredom, and a feeling of being emotionally disconnected. You may be so focused on what you're lacking that you're not seeing the blessings that are right in front of you. This is a time for introspection and a re-evaluation of what truly makes you happy. What is it that you're really looking for? The universe is offering you an opportunity, but you must be willing to open your eyes and see it.",
      interpretation_rev: "Reversed, the Four of Cups can indicate a period of withdrawal and introspection that is leading to a new perspective. You've taken the time to be alone and to think about what you want, and now you're ready to re-engage with the world with a renewed sense of purpose. This is a time for gratitude and for appreciating the blessings in your life. You're no longer taking things for granted. You're ready to say yes to the opportunities that the universe is offering you."
    },
    {
      name: "Five of Cups",
      meaning_up: "Loss, regret, disappointment, grief, pessimism",
      meaning_rev: "Moving on, acceptance, forgiveness, finding peace",
      desc: "The Five of Cups is a card of loss, sadness, and regret. It represents a time of dwelling on the past and focusing on what has gone wrong.",
      interpretation_up: "You're focusing on what you've lost, and it's causing you a great deal of pain. This card is a sign of grief, disappointment, and a tendency to dwell on the past. While it's important to acknowledge your feelings of loss, it's also important to remember that there is still hope. There are two cups still standing behind you, full of potential. It's time to turn around and to see what is still possible. Don't let your past sorrows blind you to the opportunities of the future. It's time to start healing.",
      interpretation_rev: "When reversed, the Five of Cups is a sign that you're ready to move on from a past loss. You're beginning to accept what has happened, and you're ready to forgive, both yourself and others. This is a time of healing and finding peace. You're no longer defined by your past sorrows. You're ready to turn your attention to the future and to embrace the new opportunities that are coming your way. You've learned a valuable lesson from your past, and now you're ready to use that wisdom to create a brighter future."
    },
    {
      name: "Six of Cups",
      meaning_up: "Nostalgia, childhood memories, innocence, reunion",
      meaning_rev: "Living in the past, letting go, moving forward",
      desc: "The Six of Cups is a card of nostalgia and happy memories. It often represents a connection to the past, a reunion with an old friend, or a return to a place of comfort.",
      interpretation_up: "A sweet sense of nostalgia is in the air. This card is a sign of happy memories, a connection to your inner child, and the simple joys of the past. You may be reconnecting with old friends or returning to a place that feels like home. This is a time for innocence, kindness, and generosity. Embrace the warmth of these memories and allow them to bring you comfort. The past has a gift for you, and it's a reminder of the love and happiness that has shaped who you are today.",
      interpretation_rev: "Reversed, the Six of Cups can be a warning against living in the past. While it's nice to reminisce, it's not healthy to be stuck there. You may be idealizing the past and avoiding the challenges of the present. It's time to let go of what was and to focus on what is. This can also be a sign that you're ready to move on from a difficult childhood memory. You're no longer defined by your past, and you're ready to create a new and happier future for yourself."
    },
    {
      name: "Seven of Cups",
      meaning_up: "Choices, opportunities, fantasy, illusion, wishful thinking",
      meaning_rev: "Clarity, determination, making a choice, avoiding temptation",
      desc: "The Seven of Cups is a card of choices and imagination. You're presented with many opportunities, but not all of them are what they seem.",
      interpretation_up: "You're faced with a dizzying array of choices, and it's hard to know which one to pick. This card is a sign of a vivid imagination and a tendency towards wishful thinking. While it's great to have options, you need to be careful not to get lost in a fantasy world. Not all that glitters is gold. It's time to get grounded and to think realistically about your choices. What is truly attainable? And what is just a beautiful illusion? Do your research and make a choice that is based on both your heart and your head.",
      interpretation_rev: "When reversed, the Seven of Cups is a sign of clarity and focus. You've cut through the illusions, and you know what you want. You're no longer distracted by a million different possibilities. You've made a choice, and you're determined to see it through. This is a time of practical action and a commitment to your goals. You're no longer living in a fantasy world; you're creating your own reality. You've learned to trust your own judgment, and it's leading you in the right direction."
    },
    {
      name: "Eight of Cups",
      meaning_up: "Walking away, disappointment, leaving something behind, escapism",
      meaning_rev: "Indecision, fear of the unknown, returning to a bad situation",
      desc: "The Eight of Cups represents a time of walking away from a situation that is no longer fulfilling. It's a difficult choice, but it's necessary for your emotional well-being.",
      interpretation_up: "You're making the difficult decision to walk away from something that you once held dear. This card is a sign of disappointment and a realization that what you thought would bring you happiness is actually leaving you feeling empty. It takes courage to leave behind what is familiar, but you know that you must. You're on a quest for something more, something that will truly nourish your soul. This is a time of transition and a search for a deeper meaning. Trust that you're on the right path, even if you don't know where it's leading you yet.",
      interpretation_rev: "Reversed, the Eight of Cups can indicate a fear of making a necessary change. You may know that you need to walk away from a situation, but you're afraid of the unknown. This can lead to a feeling of being stuck and a sense of hopelessness. It can also be a sign that you're tempted to return to a bad situation, simply because it's familiar. It's a sign that you need to find the courage to make the change that you know is right for you. Your happiness is worth the risk."
    },
    {
      name: "Nine of Cups",
      meaning_up: "Wish fulfillment, contentment, satisfaction, pleasure, gratitude",
      meaning_rev: "Dissatisfaction, materialism, unrealistic expectations",
      desc: "The Nine of Cups is often called the 'wish card.' It represents a time of contentment, satisfaction, and the fulfillment of your desires.",
      interpretation_up: "Your wish is about to come true. This is one of the most positive cards in the deck, and it's a sign that you're about to get exactly what you've been hoping for. This is a time of deep contentment, satisfaction, and a feeling of emotional fulfillment. You've worked hard to get here, and now it's time to enjoy the fruits of your labor. Be grateful for your blessings and allow yourself to bask in the glow of your success. You've created a life that you love, and you deserve all the happiness that is coming your way.",
      interpretation_rev: "When reversed, the Nine of Cups can indicate a feeling of dissatisfaction, despite having everything you thought you wanted. You may be so focused on material possessions that you've lost touch with what truly brings you joy. This can also be a warning against having unrealistic expectations. You may be setting yourself up for disappointment by expecting perfection. It's a sign that you need to find a more authentic and sustainable form of happiness, one that comes from within."
    },
    {
      name: "Ten of Cups",
      meaning_up: "Happy family, harmony, marriage, emotional fulfillment, joy",
      meaning_rev: "Broken family, disharmony, unhappy marriage, unmet needs",
      desc: "The Ten of Cups represents the ultimate in emotional fulfillment. It's a card of happy families, loving relationships, and a deep sense of peace and harmony.",
      interpretation_up: "You've found your happily ever after. This card is a beautiful sign of a loving family, a harmonious home, and a deep sense of emotional fulfillment. You are surrounded by love, and you feel a profound sense of connection to the people in your life. This is a time of joy, peace, and a feeling of being truly blessed. Your dreams have come true, and you are living a life that is in perfect alignment with your values. Cherish this moment of pure happiness.",
      interpretation_rev: "Reversed, the Ten of Cups can indicate a breakdown in family harmony. There may be conflict, a lack of communication, or a feeling of being emotionally disconnected from your loved ones. This can lead to a sense of sadness and a feeling that your emotional needs are not being met. It's a sign that you need to work on restoring peace and harmony in your home. It's time for an open and honest conversation to address the issues that are causing the conflict. Your family is worth fighting for."
    },
    {
      name: "Page of Cups",
      meaning_up: "Creative messages, intuition, curiosity, new emotions",
      meaning_rev: "Emotional immaturity, creative blocks, doubting yourself",
      desc: "The Page of Cups is a messenger of creative inspiration and emotional sensitivity. He is a gentle and intuitive soul, open to new ideas and feelings.",
      interpretation_up: "A new emotional or creative opportunity is on the horizon. This card is a sign of a message from your intuition, a spark of creative inspiration, or the beginning of a new emotional journey. You're feeling curious and open-hearted, and you're ready to explore your feelings in a new way. This is a time to listen to your heart and to trust your gut feelings. A new creative project or a new relationship may be just around the corner. Be open to the possibilities.",
      interpretation_rev: "When reversed, the Page of Cups can indicate a creative block or a feeling of being emotionally immature. You may be afraid to express your feelings, or you may be doubting your own creative abilities. This can lead to a feeling of being stuck and uninspired. It's a sign that you need to get back in touch with your own inner child and to allow yourself to be more playful and spontaneous. Let go of your self-doubt and allow your creativity to flow."
    },
    {
      name: "Knight of Cups",
      meaning_up: "Romance, charm, imagination, offers, following your heart",
      meaning_rev: "Unrealistic, jealousy, moodiness, emotional manipulation",
      desc: "The Knight of Cups is a romantic and charming dreamer. He is a knight in shining armor, following his heart and leading with his emotions.",
      interpretation_up: "You're being swept off your feet by a wave of romance and creative inspiration. This card is a sign of a charming and romantic offer, a new creative project, or a call to follow your heart. You're feeling idealistic and full of imagination, and you're ready to pursue your dreams with a passionate intensity. This is a time to let your emotions be your guide. Trust in the power of love and allow yourself to be a little bit of a dreamer. Your heart knows the way.",
      interpretation_rev: "Reversed, the Knight of Cups can be a warning against being too unrealistic or getting lost in a fantasy world. You may be so caught up in the romance of an idea that you're not seeing the practical realities. This can also be a sign of jealousy, moodiness, or emotional manipulation. It's a sign that you need to find a balance between your heart and your head. It's important to follow your dreams, but you also need to have a solid plan to make them a reality."
    },
    {
      name: "Queen of Cups",
      meaning_up: "Compassion, intuition, emotional security, calm, nurturing",
      meaning_rev: "Insecurity, emotional overwhelm, co-dependency, martyrdom",
      desc: "The Queen of Cups is a compassionate and intuitive ruler. She is emotionally mature, in touch with her feelings, and a source of comfort and support for others.",
      interpretation_up: "You are a calm and compassionate presence in a world of emotional turmoil. This card is a sign of your deep intuition, your emotional maturity, and your ability to nurture and support others. You are in touch with your own feelings, and you're not afraid to be vulnerable. This makes you a source of great comfort and wisdom for those around you. This is a time to trust your intuition and to lead with your heart. You have the power to heal, both yourself and others.",
      interpretation_rev: "When reversed, the Queen of Cups can indicate a feeling of being emotionally overwhelmed or insecure. You may be taking on the emotional baggage of others, and it's starting to take a toll on you. This can also be a sign of co-dependency or a tendency to play the martyr. It's a sign that you need to set some healthy emotional boundaries and to focus on your own self-care. It's okay to say no and prioritize your own well-being."
    },
    {
      name: "King of Cups",
      meaning_up: "Emotional balance, compassion, diplomacy, control",
      meaning_rev: "Emotional manipulation, moodiness, volatility",
      desc: "The King of Cups is a master of the emotional realm. He is compassionate and diplomatic, yet he maintains a calm and controlled demeanor.",
      interpretation_up: "You have achieved a mastery of your emotions. This card is a sign of emotional balance, compassion, and a calm, diplomatic approach to life. You are able to understand and to manage your own feelings, and you can offer wise and compassionate counsel to others. This is a time of emotional maturity and a deep sense of inner peace. You are a pillar of strength and stability in a world of chaos. Trust in your ability to lead with both your heart and your head.",
      interpretation_rev: "Reversed, the King of Cups can warn of emotional manipulation or a tendency to be moody and volatile. You may be using your emotional intelligence to control others, or you may be struggling to control your own emotions. This can lead to a feeling of being emotionally unstable and unpredictable. It's a sign that you need to find your emotional center and to learn to express your feelings in a more healthy and constructive way. True emotional mastery is about balance, not control."
    },
    // Swords
    {
      name: "Ace of Swords",
      meaning_up: "Breakthroughs, new ideas, mental clarity, success",
      meaning_rev: "Inner clarity, re-thinking an idea, clouded judgment",
      desc: "The Ace of Swords represents a new idea or a breakthrough in understanding. It's a symbol of mental clarity, truth, and the power of the intellect.",
      interpretation_up: "A moment of pure clarity is upon you. This card is a sign of a powerful breakthrough, a brilliant new idea, or a new way of thinking that cuts through all confusion. You're seeing the truth of a situation with a sharp and focused mind. This is a time for clear communication, honest self-expression, and making decisions based on logic and reason. The universe is offering you the sword of truth. Wield it wisely to carve out a path to success.",
      interpretation_rev: "When reversed, the Ace of Swords can indicate clouded judgment or a difficulty in expressing your ideas clearly. You may be feeling confused or that you're not seeing a situation for what it really is. This can also be a sign that a new idea needs more time to develop before it's ready to be shared. It's a call for inner clarity. Take some time to quiet your mind and to get to the heart of the matter. The truth is within you; you just need to clear away the mental clutter to find it."
    },
    {
      name: "Two of Swords",
      meaning_up: "Difficult decisions, weighing options, an impasse, avoidance",
      meaning_rev: "Indecision, confusion, information overload, stalemate",
      desc: "The Two of Swords represents a stalemate or a difficult decision. You're at a crossroads and are trying to find a balance between two opposing forces.",
      interpretation_up: "You're facing a difficult choice, and you're not sure which way to turn. This card is a sign of an impasse, where you're trying to make a decision with your head, but your heart is not in agreement. You may be blocking your emotions to try and be objective, but this is only making the decision harder. It's a time for a truce, a moment of quiet contemplation before you make your next move. You need to find a way to balance your thoughts and your feelings to find the right path forward.",
      interpretation_rev: "Reversed, the Two of Swords can indicate a state of analysis paralysis. You're so overwhelmed by information and options that you're unable to make any decision at all. This can lead to a feeling of being stuck and a sense of deep confusion. It's a sign that you need to trust your intuition. You've done enough thinking. Now it's time to listen to your gut. What does your heart tell you to do? The right answer may not be the most logical one."
    },
    {
      name: "Three of Swords",
      meaning_up: "Heartbreak, emotional pain, sorrow, grief, hurt",
      meaning_rev: "Negative self-talk, releasing pain, optimism, forgiveness",
      desc: "The Three of Swords is a card of heartbreak, sorrow, and painful truths. It represents a difficult but necessary emotional release.",
      interpretation_up: "A painful truth has pierced your heart, and you're experiencing a period of deep sorrow. This is a difficult card to receive, but it's also a necessary one. It's a sign that you need to allow yourself to feel the pain of a loss or a betrayal. Don't try to suppress your emotions. The only way out is through. This is a time for grieving and for allowing your tears to cleanse your soul. While it hurts now, this experience will ultimately make you stronger and more compassionate.",
      interpretation_rev: "When reversed, the Three of Swords can indicate that you're turning the swords on yourself. You may be engaging in negative self-talk and being your own worst critic. It's time to release this self-inflicted pain and to practice self-compassion. This can also be a sign that you're ready to move on from a past heartbreak. You're starting to see the silver lining, and you're ready to forgive and to let go. The worst is over, and it's time to start healing."
    },
    {
      name: "Four of Swords",
      meaning_up: "Rest, relaxation, meditation, contemplation, recuperation",
      meaning_rev: "Exhaustion, burn-out, deep contemplation, stagnation",
      desc: "The Four of Swords is a card of rest and recovery. It represents a time for quiet contemplation, meditation, and healing after a period of stress.",
      interpretation_up: "It's time to take a well-deserved break. This card is a sign that you need to rest, recuperate, and recharge your batteries. You've been through a lot, and now it's time for some quiet contemplation. This is not a sign of defeat, but a strategic retreat. You need this time to heal and to gather your strength for the next chapter. So, put down your sword, quiet your mind, and allow yourself to just be. The world can wait.",
      interpretation_rev: "Reversed, the Four of Swords can be a warning against pushing yourself too hard. You may be on the verge of a serious burnout, and you're ignoring the signs that your body and mind are telling you. This can also indicate a period of stagnation, where you're so afraid to act that you're not moving forward at all. It's a sign that you need to take a break, whether you think you have time for it or not. Your health and well-being should be your top priority."
    },
    {
      name: "Five of Swords",
      meaning_up: "Conflict, competition, defeat, winning at all costs, betrayal",
      meaning_rev: "Reconciliation, making amends, past resentment",
      desc: "The Five of Swords is a card of conflict and defeat. It represents a situation where there are no true winners, only losses and regrets.",
      interpretation_up: "You may have won the battle, but at what cost? This card is a sign of a hollow victory, where you've alienated others and created a great deal of resentment in the process. This can also represent a situation where you feel defeated and have been treated unfairly. It's a time of conflict, betrayal, and a general sense of unease. The lesson here is to choose your battles wisely and to consider the consequences of your actions. Is it really worth it to win at all costs?",
      interpretation_rev: "When reversed, the Five of Swords is a sign that a conflict is coming to an end, and there's a desire for reconciliation. You're ready to make amends and to let go of past resentments. This is a time for forgiveness, both for yourself and for others. You're realizing that holding on to anger is only hurting you. It's time to lay down your sword and to choose peace. It's not about who was right or wrong; it's about moving forward in a more harmonious way."
    },
    {
      name: "Six of Swords",
      meaning_up: "Transition, change, rite of passage, releasing baggage",
      meaning_rev: "Personal transition, resistance to change, unfinished business",
      desc: "The Six of Swords represents a journey from a troubled past to a more peaceful future. It's a card of transition and a necessary but often sad departure.",
      interpretation_up: "You're moving on to calmer waters. This card is a sign of a necessary transition, a journey away from a difficult situation towards a more hopeful future. It may be a sad departure, but you know that it's for the best. You're leaving your troubles behind and are ready to start a new chapter. This is a time for healing and for looking forward with a quiet sense of optimism. The journey may be long, but you're heading in the right direction.",
      interpretation_rev: "When reversed, the Six of Swords can indicate a resistance to change. You may know that you need to move on from a situation, but you're afraid to take that first step. This can also be a sign of unfinished business. You may be trying to move on, but you're still carrying a lot of emotional baggage from the past. It's a sign that you need to find a way to let go and to make peace with your past before you can truly move forward."
    },
    {
      name: "Seven of Swords",
      meaning_up: "Betrayal, deception, getting away with something, stealth",
      meaning_rev: "Imposter syndrome, deceiving yourself, keeping secrets",
      desc: "The Seven of Swords is a card of strategy, cunning, and sometimes, deception. It represents a situation where you need to be clever and to think on your feet.",
      interpretation_up: "You're in a situation that requires a bit of stealth and strategy. This card can represent a need to act alone, to take a shortcut, or to think outside the box. It can also be a warning of deception or betrayal. Someone may be trying to get away with something, or you may be the one who is not being entirely honest. It's a time to be on your guard and to trust your instincts. Not everyone has your best interests at heart.",
      interpretation_rev: "When reversed, the Seven of Swords can indicate that you're deceiving yourself. You may be lying to yourself about a situation, or you may be struggling with imposter syndrome. It can also be a sign that you're ready to come clean and to confess a secret. You're tired of living a lie, and you're ready to face the consequences of your actions. It's a time for honesty, both with yourself and with others."
    },
    {
      name: "Eight of Swords",
      meaning_up: "Negative thoughts, self-imposed restriction, imprisonment, victim mentality",
      meaning_rev: "Self-limiting beliefs, inner critic, releasing negative thoughts, open to new perspectives",
      desc: "The Eight of Swords represents a feeling of being trapped and powerless. However, the trap is often self-imposed, a result of negative thinking and a victim mentality.",
      interpretation_up: "You're feeling trapped and helpless, but the truth is, you have the power to set yourself free. This card is a sign of a self-imposed prison, where your own negative thoughts and limiting beliefs are holding you captive. You're so focused on the swords around you that you're not seeing the clear path to freedom. It's time to change your perspective. You are not a victim. You have the power to take off the blindfold and to walk away from this situation. The first step is to believe that you can.",
      interpretation_rev: "When reversed, the Eight of Swords is a sign of a major breakthrough. You're finally realizing that you are the one who has been holding yourself back. You're ready to release your self-limiting beliefs and to challenge your inner critic. This is a time of liberation and a newfound sense of personal power. You're no longer a prisoner of your own mind. You're open to new perspectives, and you're ready to create a new and more empowering reality for yourself."
    },
    {
      name: "Nine of Swords",
      meaning_up: "Anxiety, worry, fear, depression, nightmares",
      meaning_rev: "Inner turmoil, deep-seated fears, secrets, releasing worry",
      desc: "The Nine of Swords is the card of anxiety and despair. It represents a time of mental anguish, worry, and sleepless nights.",
      interpretation_up: "Your mind is a battlefield right now, and you're being tormented by your own thoughts. This card is a sign of deep anxiety, worry, and a feeling of being overwhelmed by your fears. You may be having nightmares or are unable to sleep because of the constant mental chatter. It's important to remember that these are just thoughts, not reality. It's time to seek help and to find a way to quiet your mind. You don't have to suffer in silence. Reach out to someone you trust and share what's on your mind.",
      interpretation_rev: "When reversed, the Nine of Swords can indicate that you're finally ready to face your deep-seated fears. You're no longer willing to let your anxiety control you. This can also be a sign that you're releasing a dark secret that has been weighing on you. This is a time of deep inner turmoil, but it's leading to a powerful healing. You're learning to manage your anxiety and to find a sense of inner peace. The worst is over, and you're on the path to recovery."
    },
    {
      name: "Ten of Swords",
      meaning_up: "Painful endings, deep wounds, betrayal, loss, crisis",
      meaning_rev: "Recovery, regeneration, resisting an inevitable end",
      desc: "The Ten of Swords represents a painful and dramatic ending. It's a card of betrayal, loss, and hitting rock bottom.",
      interpretation_up: "You've reached a breaking point, and it's a painful and difficult experience. This card is a sign of a dramatic ending, a betrayal, or a deep sense of loss. You may feel like you've been stabbed in the back, and you're at your lowest point. While this is a card of deep pain, it's also a sign that the worst is over. The dawn is coming. This is the end of a cycle, and from this place of total surrender, you can begin to rebuild. You have nowhere to go but up.",
      interpretation_rev: "When reversed, the Ten of Swords can indicate that you're resisting an inevitable ending. You may be trying to hold on to a situation that is no longer serving you, which is only prolonging your pain. It can also be a sign that you're in the process of recovering from a major crisis. You're slowly pulling the swords out of your back, and you're starting to heal. This is a time of regeneration and a slow but steady return to health. You are a survivor."
    },
    {
      name: "Page of Swords",
      meaning_up: "New ideas, curiosity, thirst for knowledge, new ways of communicating",
      meaning_rev: "Self-expression, all talk and no action, haphazard action",
      desc: "The Page of Swords is a messenger of new ideas and a thirst for knowledge. He is curious, energetic, and always asking questions.",
      interpretation_up: "A new idea or a new way of thinking is sparking your curiosity. This card is a sign of a thirst for knowledge and a desire to learn something new. You're full of energy, and you're eager to share your ideas with others. This is a time for clear communication, for asking questions, and for exploring new mental landscapes. Don't be afraid to be a beginner. Your curiosity is your greatest asset right now. Embrace this new intellectual journey.",
      interpretation_rev: "When reversed, the Page of Swords can be a sign of all talk and no action. You may have a lot of great ideas, but you're not putting in the work to make them a reality. This can also be a warning against speaking without thinking. You may be hurting others with your words without even realizing it. It's a sign that you need to be more mindful of how you communicate. It's time to back up your words with action."
    },
    {
      name: "Knight of Swords",
      meaning_up: "Ambitious, action-oriented, fast-thinking, direct, communicative",
      meaning_rev: "Restless, unfocused, impulsive, burn-out",
      desc: "The Knight of Swords is a figure of action and ambition. He is a fast-thinker who charges forward with a single-minded focus on his goals.",
      interpretation_up: "You're on a mission, and nothing is going to stand in your way. This card is a sign of a sharp mind, a clear focus, and a relentless drive to succeed. You're thinking fast, and you're not afraid to be direct in your communication. This is a time for ambitious action and for cutting through all obstacles to reach your goal. Your intellect is your greatest weapon. Use it to create a clear plan of attack and to execute it with precision and speed.",
      interpretation_rev: "When reversed, the Knight of Swords can warn against being too impulsive or aggressive. You may be so focused on your goal that you're not considering the consequences of your actions. This can also indicate a feeling of being restless and unfocused, as if you're charging in all directions at once. It's a sign that you need to slow down, to think before you act, and to find a more sustainable pace. Otherwise, you're heading for a major burnout."
    },
    {
      name: "Queen of Swords",
      meaning_up: "Independent, unbiased judgment, clear boundaries, direct communication",
      meaning_rev: "Overly emotional, easily influenced, bitchy, cold-hearted",
      desc: "The Queen of Swords is a sharp and intelligent ruler. She is independent, a clear communicator, and a fair and unbiased judge.",
      interpretation_up: "You are a woman of sharp intellect and unwavering integrity. This card is a sign of your ability to see the truth of a situation with a clear and unbiased mind. You're not afraid to speak your truth, and you have a gift for setting clear boundaries. This is a time for independent thinking and for trusting in your own judgment. You have a wisdom that comes from experience, and you're not easily swayed by emotion. You are a powerful and respected voice of reason.",
      interpretation_rev: "When reversed, the Queen of Swords can indicate that you're letting your emotions cloud your judgment. You may be feeling overly sensitive or are being easily influenced by the opinions of others. This can also be a warning against being cold-hearted or overly critical. It's a sign that you need to find a balance between your head and your heart. It's important to be rational, but it's also important to be compassionate."
    },
    {
      name: "King of Swords",
      meaning_up: "Mental clarity, intellectual power, authority, truth",
      meaning_rev: "Quiet power, inner truth, misuse of power, manipulation",
      desc: "The King of Swords is a master of the intellect. He is an authority figure who rules with logic, truth, and a deep understanding of the law.",
      interpretation_up: "You are an authority in your field, and your mind is your kingdom. This card is a sign of your intellectual power, your mental clarity, and your ability to lead with truth and integrity. You are a master of logic, and you have a deep understanding of complex systems. This is a time to trust in your own expertise and to share your wisdom with others. You are a just and fair leader, and your decisions are based on a clear and unbiased assessment of the facts. Your word is law.",
      interpretation_rev: "When reversed, the King of Swords can be a warning against the misuse of power. You may be using your intelligence to manipulate or to control others. This can also indicate a struggle with your own inner truth. You may be so focused on logic that you've lost touch with your own intuition. It's a sign that you need to find a more balanced and compassionate form of leadership. True power is not about being right; it's about being wise."
    },
    // Pentacles
    {
      name: "Ace of Pentacles",
      meaning_up: "Opportunity, prosperity, new venture, manifestation",
      meaning_rev: "Lost opportunity, lack of planning, greed",
      desc: "The Ace of Pentacles represents a new opportunity in the material world. It's a seed of prosperity, a new job, or the beginning of a successful new venture.",
      interpretation_up: "A golden opportunity is being presented to you. This card is a sign of a new beginning in your finances, career, or home life. It's a seed of prosperity that has the potential to grow into something truly abundant. This is a time for practical action and for making your dreams a tangible reality. The universe is offering you a gift of security and stability. Take it and use it to build a solid foundation for your future. The time is right to invest in yourself and your goals.",
      interpretation_rev: "When reversed, the Ace of Pentacles can indicate a missed opportunity or a poor financial decision. You may have been so focused on short-term gains that you've lost sight of the bigger picture. This can also be a warning against greed or a lack of planning. It's a sign that you need to be more careful with your resources and to think more long-term. Don't be discouraged by a setback. There will be other opportunities, but you need to be prepared to seize them."
    },
    {
      name: "Two of Pentacles",
      meaning_up: "Balancing, prioritizing, adapting to change, time management",
      meaning_rev: "Overwhelmed, disorganized, financial disarray",
      desc: "The Two of Pentacles is about juggling multiple priorities and adapting to the ups and downs of life. It's a card of balance and flexibility.",
      interpretation_up: "You're doing a masterful job of juggling your many responsibilities. This card is a sign of your ability to adapt to change and to keep all the balls in the air. You're being flexible and are finding a way to balance your work, your finances, and your personal life. This is a time for good time management and for being able to go with the flow. You may be busy, but you're handling it all with a sense of ease and grace. Keep up the good work.",
      interpretation_rev: "Reversed, the Two of Pentacles can indicate that you're feeling overwhelmed and disorganized. You may be trying to do too much, and you're dropping the ball. This can lead to a feeling of being out of control and a sense of financial disarray. It's a sign that you need to simplify your life and to learn to prioritize. What is truly important? It's time to let go of what is not essential and to focus on one thing at a time."
    },
    {
      name: "Three of Pentacles",
      meaning_up: "Teamwork, collaboration, learning, implementation",
      meaning_rev: "Disharmony, misalignment, working alone, lack of collaboration",
      desc: "The Three of Pentacles is a card of teamwork and collaboration. It represents a successful project that is the result of different people bringing their unique skills together.",
      interpretation_up: "Your unique skills are a valuable contribution to a larger project. This card is a sign of successful teamwork and a collaboration where everyone is playing their part. You're learning from others, and they're learning from you. This is a time for building something of high quality, something that will stand the test of time. Your hard work and dedication are being recognized, and you're on the right path to creating something truly meaningful. Together, you are stronger.",
      interpretation_rev: "When reversed, the Three of Pentacles can indicate a lack of teamwork or a sense of disharmony within a group. You may be struggling to work with others, or you may feel that your contributions are not being valued. This can also be a sign that you're trying to do everything on your own, when you would be more successful if you asked for help. It's a sign that you need to find a way to improve your communication and to work more collaboratively with others."
    },
    {
      name: "Four of Pentacles",
      meaning_up: "Saving money, security, control, conservation, scarcity mindset",
      meaning_rev: "Over-spending, greed, self-protection, generosity",
      desc: "The Four of Pentacles is a card of security and control. It represents a desire to hold on to what you have, whether it's money, possessions, or power.",
      interpretation_up: "You've worked hard to achieve a level of security, and now you're focused on protecting it. This card is a sign of being conservative with your resources and of building a solid foundation for your future. While it's wise to be prudent, be careful not to become too attached to your material possessions. There's a fine line between being financially responsible and having a scarcity mindset. It's time to find a balance between saving for the future and enjoying the present.",
      interpretation_rev: "When reversed, the Four of Pentacles can be a warning against greed or a fear of loss that is causing you to be overly controlling. You may be so afraid of losing what you have that you're not allowing any new energy to come into your life. This can also be a sign that you're ready to let go of your fear and to be more generous with your resources. It's a time for releasing your tight grip on control and for trusting in the abundance of the universe."
    },
    {
      name: "Five of Pentacles",
      meaning_up: "Financial loss, poverty, isolation, worry, insecurity",
      meaning_rev: "Recovery from financial loss, spiritual poverty",
      desc: "The Five of Pentacles is a card of hard times. It represents financial loss, poverty, and a feeling of being left out in the cold.",
      interpretation_up: "You're going through a difficult time, and you're feeling a sense of loss and isolation. This card is a sign of financial hardship, and it can be a lonely and frightening experience. It's important to remember that you are not alone. There is help available, but you must be willing to ask for it. The church in the background of the card represents a sanctuary, a place of hope. Don't be too proud to seek support. This is a temporary situation, and you will get through this.",
      interpretation_rev: "When reversed, the Five of Pentacles is a sign that you're starting to recover from a period of financial loss. You're finding new sources of income, or you're learning to live with less. This can also indicate a focus on spiritual poverty. You may have all the material possessions you could want, but you're feeling a deep sense of emptiness inside. It's a sign that you need to focus on what truly nourishes your soul, not just your bank account."
    },
    {
      name: "Six of Pentacles",
      meaning_up: "Generosity, charity, giving and receiving, sharing wealth",
      meaning_rev: "Self-care, unpaid debts, one-sided charity",
      desc: "The Six of Pentacles is a card of generosity and balance. It represents the act of both giving and receiving, and the importance of sharing one's wealth.",
      interpretation_up: "You're in a position to be generous, and you're sharing your abundance with others. This card is a sign of a healthy flow of energy, where you are both giving and receiving in equal measure. This can be a time of financial charity, or it can be about sharing your time, your knowledge, or your compassion. You're creating a positive cycle of abundance, and the more you give, the more you will receive. It's a beautiful thing.",
      interpretation_rev: "When reversed, the Six of Pentacles can be a warning against a one-sided relationship. You may be giving too much and not receiving anything in return, or you may be taking advantage of someone else's generosity. This can also be a sign of unpaid debts or a feeling of being taken for granted. It's a call to restore balance in your relationships and to make sure that the give and take is equal."
    },
    {
      name: "Seven of Pentacles",
      meaning_up: "Long-term view, sustainable results, perseverance, investment",
      meaning_rev: "Lack of long-term vision, limited success or reward",
      desc: "The Seven of Pentacles is a card of patience and long-term planning. You've planted your seeds, and now you're waiting for them to grow.",
      interpretation_up: "You've been working hard, and now it's time to pause and to assess your progress. This card is a sign of a long-term investment, and you're starting to see the first fruits of your labor. This is not a time for a quick win, but for a sustainable and long-lasting success. Be patient and continue to nurture your projects. You're on the right track, and your hard work will pay off in the long run. It's time to take a moment to appreciate how far you've come.",
      interpretation_rev: "When reversed, the Seven of Pentacles can indicate a feeling of frustration that your hard work is not paying off. You may be so focused on short-term results that you're not seeing the bigger picture. This can also be a sign of a bad investment or a project that is not sustainable. It's a call to re-evaluate your long-term goals and to make sure that you're investing your time and energy in the right things."
    },
    {
      name: "Eight of Pentacles",
      meaning_up: "Apprenticeship, craftsmanship, skill development, mastery",
      meaning_rev: "Perfectionism, misdirected activity, repetitive, no passion",
      desc: "The Eight of Pentacles is a card of dedication and mastery. It represents a time of honing your skills and taking pride in your work.",
      interpretation_up: "You're fully engaged in your work, and you're on the path to mastery. This card is a sign of a deep commitment to your craft and a desire to improve your skills. You're paying attention to the details, and you're taking great pride in the quality of your work. This is a time of focused effort and a dedication to excellence. Your hard work and diligence will lead to a great sense of accomplishment and a high level of skill. Keep up the great work.",
      interpretation_rev: "When reversed, the Eight of Pentacles can be a warning against perfectionism. You may be so focused on getting every little detail right that you're not making any progress. This can also indicate a feeling of being stuck in a repetitive and unfulfilling job. You may be going through the motions, but your heart is not in it. It's a sign that you need to find a way to bring more passion and creativity into your work."
    },
    {
      name: "Nine of Pentacles",
      meaning_up: "Abundance, luxury, self-sufficiency, financial independence",
      meaning_rev: "Self-worth, over-working, hustling, financial dependency",
      desc: "The Nine of Pentacles is a card of luxury, abundance, and financial independence. You've worked hard to create a life of comfort and security, and now you're enjoying the fruits of your labor.",
      interpretation_up: "You've created a life of abundance and independence, and you're enjoying it to the fullest. This card is a sign of a well-deserved reward for all your hard work. You're financially secure, and you have the freedom to enjoy the finer things in life. This is a time of luxury, self-sufficiency, and a deep appreciation for all that you have. You've created your own paradise, and you have every right to be proud of it.",
      interpretation_rev: "When reversed, the Nine of Pentacles can indicate that your self-worth is too tied up in your financial success. You may be working so hard that you're not taking the time to enjoy your life. This can also be a sign of a financial dependency on others or a feeling of being trapped by your own possessions. It's a call to find a more authentic and sustainable form of abundance, one that is not just about money, but about a deep sense of self-worth and inner peace."
    },
    {
      name: "Ten of Pentacles",
      meaning_up: "Wealth, family, inheritance, legacy, long-term security",
      meaning_rev: "Financial failure, loneliness, loss",
      desc: "The Ten of Pentacles represents the ultimate in material success and security. It's a card of family wealth, legacy, and a lasting foundation for future generations.",
      interpretation_up: "You've built a lasting legacy of wealth and security. This card is a sign of a deep sense of family connection and a commitment to providing for future generations. You've achieved a high level of material success, and you're sharing your abundance with your loved ones. This is a time of stability, tradition, and a deep appreciation for your roots. You've created a solid foundation that will stand the test of time.",
      interpretation_rev: "When reversed, the Ten of Pentacles can indicate a financial loss or a feeling of being disconnected from your family. You may be struggling with a sense of instability or a fear of losing what you have. This can also be a warning against putting too much emphasis on material wealth at the expense of your relationships. It's a sign that you need to focus on what truly matters: the love and support of your family."
    },
    {
      name: "Page of Pentacles",
      meaning_up: "New opportunity, manifestation, ambition, diligence",
      meaning_rev: "Lack of progress, procrastination, learning from failure",
      desc: "The Page of Pentacles is a messenger of new opportunities in the material world. He is a diligent and ambitious student, eager to learn and to make his dreams a reality.",
      interpretation_up: "A new and exciting opportunity is coming your way. This card is a sign of a new job, a new project, or a new way to make money. You're feeling ambitious and ready to put in the work to make your dreams a reality. This is a time for learning, for being diligent, and for staying grounded. The universe is offering you a chance to build something real and lasting. Seize this opportunity and get ready to manifest your goals.",
      interpretation_rev: "When reversed, the Page of Pentacles can indicate a lack of progress or a tendency to procrastinate. You may have a great idea, but you're not taking the practical steps to make it happen. This can also be a sign of a setback or a failure that you can learn from. It's a call to be more diligent and to focus on the practical details. Don't be afraid to start small. Every great success begins with a single step."
    },
    {
      name: "Knight of Pentacles",
      meaning_up: "Hard work, routine, productivity, conservatism",
      meaning_rev: "Self-discipline, boredom, feeling 'stuck', perfectionism",
      desc: "The Knight of Pentacles is a figure of hard work and dedication. He is a reliable and methodical worker who is committed to seeing his projects through to the end.",
      interpretation_up: "You're a master of routine and a model of productivity. This card is a sign of your commitment to your work and your ability to stick to a plan. You're not looking for shortcuts; you're willing to put in the hard work to get the job done right. This is a time for diligence, responsibility, and a methodical approach to your goals. Your patience and persistence will pay off in the long run. You are a reliable and trustworthy force.",
      interpretation_rev: "When reversed, the Knight of Pentacles can indicate a feeling of being stuck in a rut. You may be so focused on your routine that you've lost your sense of adventure. This can also be a warning against perfectionism or a fear of change. It's a sign that you need to shake things up and to find a way to bring more excitement into your life. It's okay to be reliable, but don't let it turn into boredom."
    },
    {
      name: "Queen of Pentacles",
      meaning_up: "Nurturing, practical, providing, financially secure",
      meaning_rev: "Financial independence, self-care, work-home conflict",
      desc: "The Queen of Pentacles is a nurturing and practical provider. She is a master of the home and a savvy businesswoman, who creates a warm and secure environment for her loved ones.",
      interpretation_up: "You are a warm and nurturing presence, and you have a gift for creating a life of comfort and security. This card is a sign of your practical nature and your ability to provide for yourself and for others. You're a savvy manager of your resources, and you're not afraid to put in the work to create a beautiful and abundant life. This is a time for nesting, for enjoying the simple pleasures of home, and for sharing your abundance with those you love.",
      interpretation_rev: "When reversed, the Queen of Pentacles can indicate a conflict between your work and your home life. You may be so focused on your career that you're neglecting your own needs or the needs of your family. This can also be a sign that you need to focus on your own financial independence and self-care. It's a call to find a better balance between your responsibilities to others and your responsibility to yourself."
    },
    {
      name: "King of Pentacles",
      meaning_up: "Wealth, business, leadership, security, discipline",
      meaning_rev: "Financially inept, obsessed with wealth, stubborn",
      desc: "The King of Pentacles is a master of the material world. He is a successful and powerful leader who has created a kingdom of wealth and abundance through his hard work and discipline.",
      interpretation_up: "You've reached the pinnacle of material success. This card is a sign of your mastery of the financial world and your ability to create a life of abundance and security. You're a powerful and respected leader, and you're not afraid to take calculated risks to grow your wealth. This is a time to enjoy the fruits of your labor and to share your success with others. You've built an empire, and it's a testament to your hard work, your discipline, and your sound judgment.",
      interpretation_rev: "When reversed, the King of Pentacles can be a warning against being obsessed with wealth and status. You may be so focused on making money that you've lost sight of what's truly important. This can also indicate a poor financial decision or a stubborn refusal to adapt to changing circumstances. It's a sign that you need to find a more balanced and fulfilling definition of success, one that is not just about the bottom line."
    }
  ],
  'pt-br': [
    // Arcanos Maiores
    {
      name: "O Louco",
      meaning_up: "Começos, inocência, espontaneidade, um espírito livre",
      meaning_rev: "Retenção, imprudência, aversão ao risco",
      desc: "Representa novos começos, ter fé no futuro, ser inexperiente, não saber o que esperar, ter sorte de principiante, improvisação e acreditar no universo.",
      interpretation_up: "Esta carta encoraja você a abraçar o desconhecido e dar um salto de fé. É um sinal de novos começos, potencial ilimitado e a liberdade que vem com um novo começo. Você está à beira de uma nova jornada, e o universo está convidando você a confiar em seus instintos e seguir seu coração, mesmo que o caminho à frente não esteja claro. Liberte quaisquer medos ou ansiedades que o estejam segurando. Como O Louco, você deve avançar com um senso de admiração e otimismo. Este é um momento para espontaneidade e para abraçar o inesperado. Não tenha medo de ser um iniciante novamente; há sabedoria na inocência e grande poder em começar com uma lousa em branco.",
      interpretation_rev: "Quando invertida, esta carta serve como um aviso contra a imprudência ou ingenuidade. Você pode estar agindo sem considerar as consequências, ou talvez esteja sendo retido por um medo profundo do desconhecido. É hora de pausar e refletir. Você está sendo impulsivo demais ou está paralisado pela indecisão? Esta carta pede que você encontre um equilíbrio. Não deixe que o medo o impeça de iniciar sua jornada, mas também garanta que você embalou o essencial. Um pouco de planejamento e previsão pode evitar um passo em falso tolo. Trata-se de assumir um risco calculado, não um risco cego."
    },
    {
      name: "O Mago",
      meaning_up: "Manifestação, desenvoltura, poder, ação inspirada",
      meaning_rev: "Manipulação, planejamento deficiente, talentos inexplorados",
      desc: "Representa o poder de manifestar seus desejos através da habilidade, concentração e ação. É uma carta de criação e força de vontade.",
      interpretation_up: "Você tem todas as ferramentas e recursos de que precisa para tornar seus sonhos realidade. Esta carta é um sinal poderoso de manifestação e força de vontade. O universo está lhe dizendo que agora é a hora de tomar uma ação inspirada. Sua capacidade de combinar o espiritual com o material está no auge. Concentre sua energia, concentre-se em seus objetivos e observe como suas intenções tomam forma. Não se trata de desejar passivamente; trata-se de criação ativa. Você é o canal entre os céus e a terra. Use suas habilidades, seu intelecto e sua criatividade para moldar seu mundo. Acredite em seu poder, pois você é o mágico de sua própria vida.",
      interpretation_rev: "Invertido, O Mago adverte sobre potencial inexplorado ou o uso indevido do poder. Você pode estar se sentindo impotente, ou talvez esteja usando suas habilidades para manipulação ou engano. É um sinal de que você está fora de contato com seu poder interior e precisa se reconectar com suas verdadeiras intenções. Você está enfrentando bloqueios criativos ou falta de foco? Esta carta sugere que você pode não estar usando todo o seu potencial. É hora de olhar para dentro e identificar o que está te segurando. Evite pegar atalhos ou usar truques para atingir seus objetivos, pois isso só levará a consequências negativas. Realinhe-se com seu eu autêntico e use seu poder para o bem."
    },
    {
      name: "A Papisa",
      meaning_up: "Intuição, conhecimento sagrado, feminino divino, a mente subconsciente",
      meaning_rev: "Segredos, desconectado da intuição, retraimento e silêncio",
      desc: "Representa intuição, subconsciente e mistério. Ela se senta entre os pilares da luz e da escuridão, sugerindo que ela é uma mediadora dos reinos consciente e subconsciente.",
      interpretation_up: "É hora de olhar além da superfície e confiar na sua intuição. Esta carta é um chamado para ouvir sua voz interior e se conectar com sua mente subconsciente. Há um mundo de conhecimento sagrado e sabedoria dentro de você, esperando para ser descoberto. As respostas que você procura não estão no mundo externo, mas nas profundezas silenciosas de sua própria alma. Preste atenção aos seus sonhos, sincronicidades e sentimentos viscerais. A Papisa o encoraja a abraçar o mistério e o desconhecido. Este é um momento para contemplação e introspecção silenciosas, não para ação. Seja paciente e permita que as verdades ocultas se revelem a você.",
      interpretation_rev: "Quando invertida, esta carta sugere que você está desconectado de sua intuição. Você pode estar ignorando sua voz interior em favor de opiniões externas ou da lógica. Isso pode levar à confusão, dúvida e uma sensação de estar perdido. É um sinal de que você precisa desacelerar e se reconectar com seu eu interior. Talvez você esteja guardando segredos, ou segredos estão sendo guardados de você. Esta carta também pode indicar uma recusa em encarar a verdade. É hora de ser honesto consigo mesmo e com os outros. Pare de ignorar os sinais de alerta e ouça o que seu instinto está lhe dizendo. A verdade pode ser difícil, mas ela o libertará."
    },
    {
        name: "A Imperatriz",
        meaning_up: "Feminilidade, beleza, natureza, nutrição, abundância",
        meaning_rev: "Bloqueio criativo, dependência dos outros",
        desc: "Representa maternidade, fertilidade e abundância. Ela é uma criadora, uma cuidadora e uma provedora, incorporando a exuberância da natureza e do mundo material.",
        interpretation_up: "Esta carta é um belo sinal de abundância, criatividade e nutrição. Você está em um período de crescimento e fertilidade, seja em seus relacionamentos, carreira ou buscas criativas. É um momento para se conectar com sua energia feminina, abraçar a beleza e se entregar aos prazeres da vida. A Imperatriz o encoraja a nutrir a si mesmo e aos outros com amor e compaixão. Passe tempo na natureza e permita que sua beleza o inspire. Este é um momento poderoso para a criação e para dar vida a novas ideias. Confie na abundância do universo e saiba que você é apoiado. Você tem o poder de criar uma vida de conforto, alegria e prosperidade.",
        interpretation_rev: "Invertida, A Imperatriz pode indicar um bloqueio criativo ou uma sensação de estagnação. Você pode estar se sentindo desconectado de sua energia criativa ou negligenciando suas próprias necessidades. Esta carta também pode apontar para uma dependência excessiva dos outros ou um tipo de amor sufocante. É um sinal de que você precisa encontrar o equilíbrio e se reconectar com sua própria fonte de abundância. Você está colocando as necessidades de todos os outros antes das suas? É hora de cuidar de si mesmo. Nutra-se com o mesmo amor e atenção que você dá aos outros. Se você está se sentindo sem inspiração, tente passar um tempo na natureza ou explorar novas saídas criativas. Recupere sua independência e lembre-se de que você é o criador de sua própria felicidade."
    },
    {
        name: "O Imperador",
        meaning_up: "Autoridade, estabelecimento, estrutura, uma figura paterna",
        meaning_rev: "Dominação, controle excessivo, falta de disciplina, inflexibilidade",
        desc: "Representa autoridade, estrutura e controle. Ele é uma figura de poder e liderança, que governa com mão firme e traz ordem ao caos.",
        interpretation_up: "Esta carta significa um tempo de estrutura, disciplina e autoridade. Você está sendo chamado para assumir o controle de sua vida e criar uma base sólida para o seu futuro. O Imperador representa liderança, estabilidade e o poder do pensamento lógico. É um sinal de que você precisa ser organizado, disciplinado e estratégico em sua abordagem. Abrace seu líder interior e não tenha medo de assumir o comando. Este é um momento para estabelecer limites, tomar decisões claras e trazer ordem ao caos. Você tem o poder de criar a vida que deseja, mas isso requer uma mão firme e uma visão clara. Confie em sua capacidade de liderar e construir algo que dure.",
        interpretation_rev: "Quando invertido, O Imperador adverte sobre um abuso de poder ou falta de controle. Você pode estar agindo como um tirano, ou talvez esteja lutando com falta de disciplina e direção. Esta carta pode indicar uma atitude rígida e inflexível, ou uma vida caótica e desestruturada. É um sinal de que você precisa encontrar o equilíbrio. Você está sendo muito controlador ou, inversamente, muito passivo? É hora de examinar seu relacionamento com poder e autoridade. Se você está sendo muito rígido, aprenda a ser mais flexível e aberto a mudanças. Se lhe falta disciplina, é hora de criar alguma estrutura em sua vida. O verdadeiro poder vem de um equilíbrio entre controle e compaixão."
    },
    {
        name: "O Hierofante",
        meaning_up: "Sabedoria espiritual, crenças religiosas, conformidade, tradição, instituições",
        meaning_rev: "Crenças pessoais, liberdade, desafiar o status quo",
        desc: "Representa tradição, instituições estabelecidas e identidade de grupo. Ele é um professor espiritual que preenche a lacuna entre o divino e a humanidade.",
        interpretation_up: "Este é um momento para se conectar com a tradição e a sabedoria estabelecida. Esta carta representa um caminho de aprendizado de uma fonte confiável, seja um professor espiritual, um mentor ou uma instituição de ensino. Você está sendo guiado a seguir um caminho estruturado que foi testado e comprovado ao longo do tempo. É um momento de conformidade e de encontrar seu lugar dentro de um grupo. Abrace o conforto e a orientação que a tradição pode oferecer. Há valor em aprender com a sabedoria do passado. Este pode ser um momento para exploração espiritual dentro de um sistema de crenças estruturado ou para se comprometer com um caminho convencional que lhe trará um senso de pertencimento e propósito.",
        interpretation_rev: "Invertido, O Hierofante o encoraja a desafiar o status quo e a pensar por si mesmo. Você pode estar se sentindo constrangido pela tradição и pelas expectativas sociais. Este é um momento para questionar as regras e forjar seu próprio caminho, mesmo que isso signifique ir contra a corrente. Suas crenças pessoais são mais importantes do que se conformar ao grupo. É hora de uma rebelião espiritual. Liberte-se do dogma e encontre um caminho que seja verdadeiro para sua própria alma. Você é seu próprio guru. Confie em sua sabedoria interior e tenha a coragem de desafiar a autoridade. A liberdade vem de viver em alinhamento com sua própria verdade autêntica."
    },
    {
        name: "Os Amantes",
        meaning_up: "Amor, harmonia, relacionamentos, alinhamento de valores, escolhas",
        meaning_rev: "Amor-próprio, desarmonia, desequilíbrio, desalinhamento de valores",
        desc: "Representa amor, parcerias e escolhas. É uma carta de união, harmonia e da importância de tomar decisões alinhadas com o coração.",
        interpretation_up: "Uma união poderosa e harmoniosa está no cerne da sua situação atual. Esta carta representa uma conexão profunda com outra pessoa, construída com base no amor, respeito mútuo e valores compartilhados. Também pode significar uma escolha crítica que você deve fazer, uma que exige que você seja verdadeiro com seu próprio coração e valores. Este é um momento de belo alinhamento, tanto em seus relacionamentos quanto dentro de si mesmo. Abrace o amor e a harmonia que o cercam. Se você está diante de uma escolha, ouça seu coração e escolha o caminho que está mais alinhado com seu eu autêntico. Não se trata apenas de amor romântico; trata-se de criar conexões harmoniosas em todas as áreas de sua vida. Quando você é verdadeiro consigo mesmo, atrairá relacionamentos que refletem o mesmo nível de integridade.",
        interpretation_rev: "Quando invertida, Os Amantes pode indicar desarmonia, conflito e um desalinhamento de valores. Pode haver uma falta de equilíbrio em seus relacionamentos, ou você pode estar lutando com uma escolha que não tem uma resposta claramente certa. Isso também pode ser um sinal de que você perdeu o contato com seus próprios valores e não está agindo em alinhamento com seu verdadeiro eu. Este é um chamado para o amor-próprio e uma reavaliação de seus relacionamentos. Suas parcerias são construídas sobre uma base de respeito mútuo? Você está sendo verdadeiro com seu próprio coração? É hora de ter conversas honestas, tanto consigo mesmo quanto com os outros, para restaurar um senso de harmonia e equilíbrio. Um relacionamento não pode prosperar se os indivíduos dentro dele não forem verdadeiros consigo mesmos."
    },
    {
        name: "O Carro",
        meaning_up: "Controle, força de vontade, vitória, afirmação, determinação",
        meaning_rev: "Autodisciplina, oposição, falta de direção",
        desc: "Representa força de vontade, determinação e vitória. Trata-se de superar obstáculos e avançar com confiança e controle.",
        interpretation_up: "Você está no comando, e é hora de avançar com determinação e força de vontade. Esta carta é um sinal poderoso de vitória, controle e superação de obstáculos pela pura força de vontade. Você tem um destino claro em mente, e tem a ambição e a autodisciplina para chegar lá. As forças opostas em sua vida estão agora sob seu controle, e você é capaz de guiá-las na mesma direção. Este é um momento para ação confiante e um foco obstinado em seus objetivos. Não deixe nada ficar em seu caminho. Você tem o poder de superar qualquer desafio que surja. Mantenha o foco, mantenha a determinação, e você alcançará a vitória que busca. Você é o mestre do seu próprio destino.",
        interpretation_rev: "Invertido, O Carro adverte sobre uma falta de controle e direção. Você pode estar se sentindo impotente, como se estivesse sendo puxado em várias direções ao mesmo tempo. Ou talvez você esteja avançando com agressão e falta de autodisciplina, o que só está criando mais obstáculos. Isso pode levar a uma sensação de estar preso e frustrado. É hora de recuperar o controle de sua vida. Isso requer disciplina interior e um claro senso de direção. Qual é o seu verdadeiro objetivo? Uma vez que você tenha um destino claro em mente, pode começar a aproveitar as forças opostas em sua vida e a movê-las na mesma direção. O verdadeiro poder não é sobre agressão; é sobre ação controlada e focada."
    },
    {
        name: "A Força",
        meaning_up: "Força, coragem, paciência, controle, compaixão",
        meaning_rev: "Força interior, auto-dúvida, baixa energia, emoção crua",
        desc: "Representa força interior, coragem e compaixão. Trata-se de domar a fera interior com gentileza e paciência, não com força bruta.",
        interpretation_up: "Você possui um poço profundo de força interior e coragem. Esta carta não é sobre força bruta, mas sobre o poder de um coração gentil e compassivo. Você é capaz de enfrentar seus medos e domar seus próprios demônios interiores com paciência e autocontrole. Este é um momento de confiança tranquila e um domínio de suas próprias emoções e instintos. Sua verdadeira força reside em sua capacidade de ser compassivo, tanto consigo mesmo quanto com os outros. Você tem a coragem de ser vulnerável e a resiliência para superar qualquer desafio. Confie em seu poder interior e saiba que você é mais forte do que pensa. Você é um guerreiro gentil, e sua compaixão é sua maior arma.",
        interpretation_rev: "Quando invertida, a carta da Força pode indicar um sentimento de fraqueza e auto-dúvida. Você pode estar se sentindo sobrecarregado por suas próprias emoções e instintos, e pode estar questionando sua capacidade de lidar com a situação. Isso pode levar a baixa energia e a uma sensação de estar fora de controle. É hora de se reconectar com sua força interior. Não se trata de suprimir suas emoções, mas de aprender a entendê-las e a trabalhar com elas. Pratique a autocompaixão e seja gentil consigo mesmo. Você pode precisar de um tempo para descansar e recarregar suas baterias. Sua força ainda está lá; você só precisa encontrá-la novamente."
    },
    {
        name: "O Eremita",
        meaning_up: "Busca da alma, introspecção, estar sozinho, orientação interior",
        meaning_rev: "Isolamento, solidão, retraimento",
        desc: "Representa introspecção, busca da alma e busca de orientação interior. É um tempo de retirada do mundo exterior para encontrar sabedoria interior.",
        interpretation_up: "É hora de voltar sua atenção para dentro e buscar a sabedoria que reside em sua própria alma. Esta carta representa um período de introspecção, busca da alma e uma retirada temporária do mundo exterior. Você está em uma busca por orientação interior, e não a encontrará no barulho e nas distrações da vida cotidiana. Você deve estar disposto a trilhar seu caminho sozinho por um tempo. Abrace este tempo de solidão. Não é um sinal de solidão, mas uma oportunidade para uma profunda autodescoberta. Sua luz interior o guiará através da escuridão. Confie em sua própria sabedoria e tenha a coragem de ouvir o que sua alma está lhe dizendo. As respostas estão dentro de você.",
        interpretation_rev: "Invertido, O Eremita pode indicar um período de isolamento forçado ou solidão. Você pode ter se retirado demais do mundo, e agora está se sentindo desconectado e perdido. Ou talvez você esteja evitando a introspecção e tenha medo de enfrentar seus próprios demônios interiores. Isso pode levar a uma sensação de estar preso no escuro. É hora de sair de sua caverna. Se você está se sentindo solitário, procure amigos ou familiares de confiança para obter apoio. Se você está evitando seu trabalho interior, tenha a coragem de enfrentar o que você tem escondido. Você não precisa ficar sozinho para sempre, mas precisa estar disposto a fazer o trabalho interior para encontrar o caminho de volta à luz."
    },
    {
        name: "Roda da Fortuna",
        meaning_up: "Boa sorte, carma, ciclos de vida, destino, um ponto de virada",
        meaning_rev: "Má sorte, resistência à mudança, quebra de ciclos",
        desc: "Representa a natureza cíclica da vida, o destino e os pontos de virada. É um lembrete de que a vida está sempre em movimento e que o que vai, volta.",
        interpretation_up: "A vida está em um estado de fluxo, e um ponto de virada significativo está sobre você. Esta carta é um símbolo poderoso de destino, sorte e da natureza cíclica da vida. A roda está girando a seu favor, trazendo com ela novas oportunidades e mudanças positivas. Este é um momento para ir com o fluxo e confiar em um plano maior. O que sobe tem que descer, mas por enquanto, você está em ascensão. Abrace este período de boa sorte e lembre-se de que a vida está sempre mudando. Seja grato pelas bênçãos que estão vindo em sua direção e saiba que você está exatamente onde precisa estar.",
        interpretation_rev: "Quando invertida, a Roda da Fortuna pode indicar um período de má sorte ou uma resistência à mudança. Você pode estar se sentindo preso em um ciclo negativo, ou talvez esteja tentando controlar coisas que estão além do seu controle. Isso pode levar a uma sensação de impotência e frustração. É hora de abandonar seu apego a um resultado específico e aceitar que a mudança é uma parte inevitável da vida. Você pode estar no fundo da roda agora, mas não ficará lá para sempre. Esta é uma oportunidade para aprender com seus erros e se libertar de padrões negativos. Tenha fé de que a roda girará novamente."
    },
    {
        name: "A Justiça",
        meaning_up: "Justiça, equidade, verdade, causa e efeito, lei",
        meaning_rev: "Injustiça, falta de responsabilidade, desonestidade",
        desc: "Representa a verdade, a equidade e a lei de causa e efeito. É um lembrete de que nossas ações têm consequências e que a verdade sempre virá à tona.",
        interpretation_up: "A verdade está sendo revelada, e um resultado justo e equitativo está próximo. Esta carta é um símbolo poderoso de integridade, equidade e da lei de causa e efeito. Você está sendo chamado a agir com honestidade e a assumir a responsabilidade por suas ações. Se você foi injustiçado, confie que a justiça será feita. Se você está diante de uma decisão difícil, escolha o caminho da verdade e da integridade. As balanças serão equilibradas, e você colherá o que semeou. Este é um momento de clareza, objetividade e um compromisso de fazer o que é certo. A verdade o libertará.",
        interpretation_rev: "Invertida, a carta da Justiça pode indicar um período de injustiça, desonestidade e falta de responsabilidade. Você pode estar experimentando as consequências de ações passadas, ou talvez esteja sendo tratado injustamente. Isso pode levar a um sentimento de ressentimento e a uma sensação de ser uma vítima. É hora de dar uma olhada séria em suas próprias ações e ser honesto consigo mesmo. Você está evitando a responsabilidade? Você está culpando os outros por seus próprios erros? É também um chamado para lutar pelo que é certo, mesmo que seja difícil. Defenda suas crenças e exija a justiça que você merece. Não deixe a desonestidade passar sem contestação."
    },
    {
        name: "O Enforcado",
        meaning_up: "Pausa, rendição, deixar ir, novas perspectivas",
        meaning_rev: "Atrasos, resistência, adiamento, indecisão",
        desc: "Representa um período de suspensão, de deixar ir e de ver as coisas de uma nova perspectiva. É um tempo de pausa e rendição, não de ação.",
        interpretation_up: "É hora de apertar o pause e ver as coisas de uma perspectiva diferente. Esta carta representa um período de rendição, de deixar ir e uma suspensão voluntária da ação. Você pode estar se sentindo preso, mas este não é um momento para lutar. É uma oportunidade para liberar seu apego a um resultado específico e ver sua situação sob uma nova luz. Ao abrir mão do controle, você obterá uma compreensão mais profunda e uma sensação de paz interior. Este é um momento de paciência e reflexão. As respostas virão quando você parar de lutar e começar a se render.",
        interpretation_rev: "Quando invertido, O Enforcado pode indicar um período de resistência teimosa e uma recusa em deixar ir. Você pode estar adiando e evitando um sacrifício necessário, o que só está prolongando seu sofrimento. Isso pode levar a uma sensação de estar preso em uma rotina e a uma sensação de frustração. É hora de parar de resistir e aceitar o que você não pode mudar. Você está sendo solicitado a fazer um sacrifício, и quanto mais você adiar, mais difícil se tornará. Abandone seu orgulho e seu apego a estar certo. A rendição não é um sinal de fraqueza; é um ato de coragem."
    },
    {
        name: "A Morte",
        meaning_up: "Finais, mudança, transformação, transição",
        meaning_rev: "Resistência à mudança, transformação pessoal, purificação interior",
        desc: "Representa um fim, uma transformação e o fechamento de um capítulo. É uma carta de mudança profunda e da necessária liberação do velho para dar lugar ao novo.",
        interpretation_up: "Um final significativo e necessário está sobre você, mas não tenha medo. Esta carta não é sobre a morte literal; é sobre transformação, mudança e o fechamento de um capítulo para dar lugar a um novo. Este é um tempo de liberação profunda e de troca de pele. Você está sendo solicitado a deixar ir o que não lhe serve mais, seja um relacionamento, um emprego ou um antigo sistema de crenças. Este final pode ser doloroso, mas é essencial para o seu crescimento. Abrace esta transformação e saiba que do outro lado desta morte há um belo renascimento.",
        interpretation_rev: "Invertida, a carta da Morte pode indicar uma poderosa resistência à mudança. Você pode estar se apegando ao passado e se recusando a deixar ir, o que só está lhe causando mais dor e estagnação. Isso pode levar a uma sensação de estar preso em um limbo, incapaz de avançar. É hora de enfrentar seus medos e abraçar o inevitável. A mudança está chegando, quer você goste ou não. Quanto mais você resistir, mais difícil será. Isso também é um sinal de uma profunda purificação interior. Você está sendo chamado a liberar velhos padrões e a se transformar de dentro para fora. É hora de um detox espiritual."
    },
    {
        name: "A Temperança",
        meaning_up: "Equilíbrio, moderação, paciência, propósito",
        meaning_rev: "Desequilíbrio, excesso, autocura, realinhamento",
        desc: "Representa equilíbrio, moderação e encontrar o meio-termo. Trata-se de misturar forças opostas para criar algo novo e harmonioso.",
        interpretation_up: "Você está encontrando um belo senso de equilíbrio e harmonia em sua vida. Esta carta é um sinal de moderação, paciência e uma mistura de forças opostas. Você está aprendendo a trilhar o caminho do meio e a integrar todos os aspectos de si mesmo. Este é um tempo de cura, paz e um profundo senso de propósito. Você tem uma visão clara de seus objetivos e está adotando uma abordagem calma e constante para alcançá-los. Sua paciência e moderação são suas maiores forças agora. Confie no processo e saiba que você está no caminho certo.",
        interpretation_rev: "Quando invertida, a carta da Temperança pode indicar um período de desequilíbrio e excesso. Você pode estar oscilando entre extremos, ou talvez esteja se entregando a hábitos pouco saudáveis. Isso pode levar a uma sensação de estar fora de controle e a uma falta de propósito. É hora de encontrar seu centro e restaurar um senso de equilíbrio. Este é um chamado para autocura e realinhamento. Dê um passo para trás e examine onde você está fora de equilíbrio. Você está trabalhando demais ou de menos? Você está dando demais ou de menos? É hora de trazer todos os aspectos de sua vida de volta à harmonia."
    },
    {
        name: "O Diabo",
        meaning_up: "Eu sombrio, apego, vício, restrição, sexualidade",
        meaning_rev: "Liberação de crenças limitantes, exploração de pensamentos sombrios, desapego",
        desc: "Representa o vício, o materialismo e os apegos que nos prendem. É uma carta de tentação e do eu sombrio, mas também um chamado para recuperar o próprio poder.",
        interpretation_up: "É hora de confrontar seu eu sombrio e as correntes que o prendem. Esta carta representa o vício, o apego e as crenças limitantes que o estão segurando. Você pode estar se sentindo preso por seus próprios desejos, ou talvez tenha entregado seu poder a algo ou alguém. Este é um poderoso chamado para recuperar sua liberdade. O primeiro passo é reconhecer suas correntes. A que você está viciado? Do que você tem medo de abrir mão? O Diabo é um professor poderoso, e ele está lhe mostrando onde você não é livre. É hora de quebrar as correntes и de retomar seu poder.",
        interpretation_rev: "Invertido, O Diabo pode indicar um poderoso avanço e uma libertação da escravidão. Você está se tornando consciente de suas crenças limitantes e está pronto para deixá-las ir. Este é um tempo de profundo desapego e de recuperação de seu poder pessoal. Você não é mais um escravo de seus desejos; você é o mestre de seu próprio destino. Este é um tempo de libertação e uma profunda exploração de seu próprio eu sombrio. Você não tem medo de olhar para a escuridão, pois sabe que é lá que encontrará sua maior força. Você está se libertando."
    },
    {
        name: "A Torre",
        meaning_up: "Mudança súbita, convulsão, caos, revelação, despertar",
        meaning_rev: "Transformação pessoal, medo da mudança, evitar o desastre",
        desc: "Representa uma mudança súbita e disruptiva. É uma carta de caos, convulsão e da destruição de falsas estruturas, levando a um poderoso despertar.",
        interpretation_up: "Prepare-se para uma mudança súbita e dramática. Esta carta representa uma convulsão poderosa e muitas vezes chocante, projetada para abalá-lo até o âmago. As fundações de sua vida estão sendo desafiadas, e o que você pensava ser verdade está sendo revelado como falso. Esta pode ser uma experiência dolorosa e caótica, mas é, em última análise, para o seu bem maior. A Torre é uma intervenção divina, projetada para libertá-lo de uma prisão que você talvez nem soubesse que estava. Este é um despertar poderoso, e do outro lado desta destruição há uma nova sensação de liberdade e verdade.",
        interpretation_rev: "Quando invertida, A Torre pode indicar um medo da mudança e uma tentativa desesperada de evitar o desastre. Você pode estar se apegando a uma situação que não é mais sustentável, e está resistindo ao inevitável. Isso pode levar a um período prolongado de ansiedade e a uma sensação de desgraça iminente. É hora de deixar ir e permitir que a torre caia. Quanto mais você resistir, mais doloroso será. Isso também pode ser um sinal de que você é um poderoso agente de mudança, e está sendo chamado a derrubar velhas estruturas em sua própria vida. Você é o raio, e é hora de atacar."
    },
    {
        name: "A Estrela",
        meaning_up: "Esperança, fé, propósito, renovação, espiritualidade",
        meaning_rev: "Falta de fé, desespero, autoconfiança, desconexão",
        desc: "Representa esperança, inspiração e um renovado senso de propósito. É uma carta de cura e um lembrete de que sempre há luz na escuridão.",
        interpretation_up: "Após um período de escuridão, uma estrela de esperança apareceu. Esta carta é um belo sinal de fé, renovação e uma profunda conexão com o divino. Você está sendo guiado por um senso de propósito, e está cheio de um sentimento tranquilo de otimismo. Este é um tempo de cura, inspiração e um reabastecimento de seu espírito. O universo está do seu lado, e você está sendo abençoado com um renovado senso de esperança. Confie no futuro e saiba que você está no caminho certo. Você é uma estrela brilhante, e é hora de deixar sua luz brilhar.",
        interpretation_rev: "Invertida, A Estrela pode indicar um sentimento de desesperança e falta de fé. Você pode ter perdido a conexão com sua própria orientação interior, e está se sentindo perdido no escuro. Isso pode levar a uma sensação de desespero e a um sentimento de ser abandonado pelo universo. É hora de se reconectar com sua própria luz interior. A estrela ainda está lá; você só precisa procurá-la. Este é um chamado para a autoconfiança e um lembrete de que você tem o poder de criar sua própria esperança. Não desista. O amanhecer está chegando."
    },
    {
        name: "A Lua",
        meaning_up: "Ilusão, medo, ansiedade, subconsciente, intuição",
        meaning_rev: "Liberação do medo, emoção reprimida, confusão interior",
        desc: "Representa a ilusão, o medo e a mente subconsciente. É uma carta de mistério e um lembrete de que nem tudo é o que parece.",
        interpretation_up: "As coisas não são o que parecem, e você deve confiar em sua intuição para navegar pelo caminho à frente. Esta carta representa uma jornada às profundezas do seu próprio subconsciente, onde você encontrará tanto seus medos mais profundos quanto sua maior sabedoria. A Lua é uma carta de ilusão, mistério e um aguçado senso de intuição. Você pode estar se sentindo ansioso e incerto, mas este é um momento para confiar em seus sentimentos viscerais. Preste atenção aos seus sonhos e aos sinais sutis que o universo está lhe enviando. O caminho pode ser escuro, mas sua luz interior o guiará.",
        interpretation_rev: "Quando invertida, A Lua pode indicar uma liberação do medo e o levantamento de uma ilusão. A escuridão está começando a recuar, e você está começando a ver as coisas com mais clareza. Este é um tempo de liberação emocional e uma disposição para confrontar suas emoções reprimidas. Você não é mais um prisioneiro de seus próprios medos. Isso também pode ser um sinal de confusão interior e uma luta para distinguir entre a realidade e a ilusão. É hora de se firmar e buscar clareza. Confie em sua intuição, mas também use sua lógica para discernir a verdade."
    },
    {
        name: "O Sol",
        meaning_up: "Positividade, diversão, calor, sucesso, vitalidade",
        meaning_rev: "Criança interior, sentir-se para baixo, excessivamente otimista",
        desc: "Representa alegria, sucesso e positividade pura. É uma carta de vitalidade, iluminação e dos prazeres simples da vida.",
        interpretation_up: "Deixe o sol entrar! Esta é uma das cartas mais positivas do baralho, e é um sinal poderoso de sucesso, alegria e vitalidade. A escuridão passou, e você agora está se aquecendo no brilho quente da iluminação. Este é um tempo de celebração, otimismo e um profundo senso de gratidão. Abrace sua criança interior e encontre alegria nos prazeres simples da vida. Você está no caminho certo, e tudo vai ficar bem. Seu futuro é brilhante, e você merece toda a felicidade que está vindo em sua direção.",
        interpretation_rev: "Invertido, O Sol pode indicar um sentimento de tristeza ou um revés temporário. Você pode estar lutando para encontrar alegria em sua vida, ou talvez esteja sendo excessivamente otimista e não esteja encarando a realidade. Isso pode levar a uma sensação de estar desconectado de sua própria luz interior. É hora de se reconectar com sua criança interior e encontrar o que realmente lhe traz alegria. Este não é um momento para pessimismo, mas para uma forma mais realista e fundamentada de otimismo. O sol ainda está lá, mesmo que esteja atrás das nuvens. É hora de encontrar o caminho de volta à luz."
    },
    {
        name: "O Julgamento",
        meaning_up: "Julgamento, renascimento, chamado interior, absolvição",
        meaning_rev: "Auto-dúvida, crítico interior, ignorar o chamado",
        desc: "Representa um momento de acerto de contas, um despertar espiritual e um chamado para um propósito maior. É uma carta de renascimento e absolvição.",
        interpretation_up: "Você está em uma encruzilhada importante, e uma decisão final está próxima. Esta carta representa um momento de despertar, um chamado para um propósito maior e um julgamento de suas ações passadas. Este não é um momento para culpa ou arrependimento, mas para uma avaliação clara de onde você esteve e para onde está indo. Você está sendo chamado a se levantar e a abraçar um novo nível de consciência. Este é um tempo de renascimento e absolvição. Deixe o passado para trás e atenda ao chamado de sua alma. Uma vida nova e mais autêntica está esperando por você.",
        interpretation_rev: "Quando invertida, a carta do Julgamento pode indicar uma luta com a auto-dúvida e um crítico interior severo. Você pode estar se julgando com muita dureza, ou talvez esteja ignorando um chamado claro de seu eu superior. Isso pode levar a uma sensação de estar preso no passado e uma incapacidade de avançar. É hora de se perdoar e de abandonar a autocrítica. Você está recebendo uma segunda chance, mas deve estar disposto a aceitá-la. Ouça sua voz interior e tenha a coragem de atender ao chamado. É hora de se levantar."
    },
    {
        name: "O Mundo",
        meaning_up: "Conclusão, integração, realização, viagem",
        meaning_rev: "Busca de encerramento pessoal, atalhos, atrasos",
        desc: "Representa a conclusão de um ciclo, uma conclusão bem-sucedida e um senso de totalidade. É uma carta de integração, realização e uma celebração da vida.",
        interpretation_up: "Você alcançou um marco significativo e a conclusão bem-sucedida de um ciclo. Este é um tempo de celebração, realização e um profundo senso de totalidade. Você integrou todas as lições que aprendeu, e agora está pronto para desfrutar dos frutos do seu trabalho. O mundo está a seus pés, e novas oportunidades estão se abrindo para você. Isso também pode ser um sinal de viagem literal e uma expansão de seus horizontes. Abrace este momento de conclusão e saiba que você fez um bom trabalho. Você está em perfeito alinhamento com o universo.",
        interpretation_rev: "Invertido, O Mundo pode indicar uma falta de encerramento e um sentimento de incompletude. Você pode ter pego atalhos ou não ter aprendido completamente as lições deste ciclo. Isso pode levar a uma sensação de estar preso e uma incapacidade de passar para o próximo capítulo. É hora de voltar e amarrar as pontas soltas. O que está te impedindo de ter um senso de conclusão? Este é um chamado para encontrar um encerramento pessoal e fazer o trabalho necessário para terminar o que você começou. Não tenha medo de voltar ao início. O mundo está esperando por você, mas você deve estar pronto para abraçá-lo."
    },
    // Naipe de Paus
    {
        name: "Ás de Paus",
        meaning_up: "Inspiração, novas oportunidades, crescimento, potencial",
        meaning_rev: "Atrasos, falta de motivação, sentir-se sobrecarregado",
        desc: "O Ás de Paus representa uma centelha de nova energia e potencial. É um símbolo de uma nova ideia, uma explosão de inspiração ou o início de um novo empreendimento apaixonado.",
        interpretation_up: "Uma onda de energia criativa e inspiração está fluindo para você agora. Esta carta é uma luz verde do universo, sinalizando o início de algo novo e emocionante. Pode ser um novo projeto, uma nova paixão ou um novo nível de crescimento pessoal. Este é o momento de aproveitar a oportunidade e dar o primeiro passo. Seu potencial é ilimitado agora. Confie em seus instintos, abrace este novo começo e permita que sua criatividade brilhe. Não hesite; o tempo para a ação é agora. Plante a semente de sua nova ideia e veja-a crescer.",
        interpretation_rev: "Quando invertido, o Ás de Paus sugere que você está se sentindo sem inspiração ou que sua energia criativa está bloqueada. Você pode ter uma ótima ideia, mas está lutando para tirá-la do papel. Atrasos e frustrações são comuns quando esta carta aparece invertida. É um sinal de que você precisa encontrar uma nova fonte de inspiração ou limpar o que quer que esteja te segurando. Você está se sentindo sobrecarregado com muitas responsabilidades? É hora de encontrar uma maneira de reacender seu fogo interior. Não tenha medo de fazer uma pausa e voltar ao seu projeto com novos olhos."
    },
    {
        name: "Dois de Paus",
        meaning_up: "Planejamento futuro, tomar decisões, sair de casa, poder pessoal",
        meaning_rev: "Medo do desconhecido, falta de planejamento, jogar pelo seguro",
        desc: "O Dois de Paus é sobre planejar o futuro e fazer escolhas. É uma carta de previsão e da coragem de sair para o mundo.",
        interpretation_up: "Você está em uma encruzilhada, e é hora de fazer um plano para o futuro. Você já alcançou um nível de sucesso, mas now está procurando expandir seus horizontes. Esta carta o encoraja a pensar grande e a não ter medo de sair de sua zona de conforto. Você tem o mundo em suas mãos, e é hora de decidir o que quer fazer com ele. Este é um momento para decisões ousadas e para confiar em seu próprio poder pessoal. Faça um plano, estabeleça seus objetivos e prepare-se para conquistar o mundo. Seu futuro está esperando por você.",
        interpretation_rev: "Invertido, o Dois de Paus pode indicar um medo do desconhecido que o está segurando. Você pode ter medo de deixar sua zona de conforto, ou pode estar lutando com falta de planejamento e previsão. Isso pode levar a uma sensação de estar preso e indeciso. É um sinal de que você precisa enfrentar seus medos e começar a pensar no futuro. Não deixe que o medo do fracasso o impeça de perseguir seus sonhos. É hora de parar de jogar pelo seguro e começar a correr alguns riscos calculados. Você nunca saberá do que é capaz se não tentar."
    },
    {
        name: "Três de Paus",
        meaning_up: "Expansão, previsão, oportunidades no exterior, seguir em frente",
        meaning_rev: "Jogar pequeno, falta de previsão, atrasos inesperados",
        desc: "O Três de Paus significa progresso, expansão e olhar para o futuro com otimismo. Seus planos estão em andamento e você está começando a ver os resultados.",
        interpretation_up: "Seus navios estão chegando. Os planos que você colocou em movimento estão começando a dar frutos, e é hora de olhar para a próxima fase de sua jornada. Esta carta é um sinal de expansão, progresso e das oportunidades emocionantes que se encontram no horizonte. Você fez o trabalho duro, e agora pode apreciar a vista enquanto seus esforços são recompensados. Isso também pode ser um sinal de viagem ou oportunidades no exterior. Mantenha seus olhos no futuro e continue a avançar com confiança. O mundo está se abrindo para você.",
        interpretation_rev: "Quando invertido, o Três de Paus pode sugerir que você está jogando muito pequeno ou que está sendo retido por falta de previsão. Você pode estar perdendo oportunidades porque não está olhando longe o suficiente. Isso também pode indicar atrasos e frustrações inesperados. É um sinal de que você precisa reavaliar seus planos e pensar maior. Não tenha medo de sonhar. Se você está enfrentando contratempos, не desista. Tire um tempo para se reagrupar e criar uma nova estratégia. Seu potencial é maior do que você pensa."
    },
    {
        name: "Quatro de Paus",
        meaning_up: "Celebração, alegria, harmonia, relaxamento, regresso a casa",
        meaning_rev: "Celebração pessoal, harmonia interior, conflito com os outros",
        desc: "O Quatro de Paus é uma carta de celebração alegre, harmonia e estabilidade. Muitas vezes representa um marco feliz, como um casamento, um regresso a casa ou a conclusão bem-sucedida de um projeto.",
        interpretation_up: "É hora de celebrar! Esta carta é um sinal maravilhoso de alegria, harmonia e um período merecido de descanso e relaxamento. Você alcançou um marco significativo, e é hora de compartilhar seu sucesso com as pessoas que você ama. Este é um momento para festas, encontros e um profundo senso de comunidade. Abrace este momento de felicidade e permita-se desfrutar dos frutos do seu trabalho. Você trabalhou duro para criar uma base estável e feliz, e agora pode relaxar e aproveitá-la. Bem-vindo a casa.",
        interpretation_rev: "Invertido, o Quatro de Paus pode indicar uma celebração mais privada ou pessoal. Você pode estar sentindo um profundo senso de harmonia interior, mas ainda não está pronto para compartilhá-lo com o mundo. Isso também pode ser um sinal de uma quebra na comunicação ou um conflito com entes queridos que está impedindo uma celebração. É um sinal de que você precisa encontrar sua própria paz interior antes de poder celebrar com os outros. Tire um tempo para si mesmo e concentre-se no que lhe traz alegria. Uma vez que você tenha encontrado sua própria harmonia interior, estará pronto para compartilhá-la com o mundo."
    },
    {
        name: "Cinco de Paus",
        meaning_up: "Conflito, desentendimentos, competição, tensão, diversidade",
        meaning_rev: "Evitar conflitos, encontrar um terreno comum, liberar a tensão",
        desc: "O Cinco de Paus representa conflito, competição e um choque de ideias ou egos. É um tempo de luta e desacordo, mas também pode levar ao crescimento e a uma maior compreensão.",
        interpretation_up: "Você está no meio de um conflito ou uma competição, e as coisas estão um pouco caóticas. Esta carta representa um choque de vontades, onde todos estão lutando para serem ouvidos. Embora possa ser um momento estressante, também é uma oportunidade de crescimento. Este é um momento para defender suas crenças, mas também para ouvir o que os outros têm a dizer. A chave é encontrar uma maneira de trabalhar juntos, apesar de suas diferenças. Não tenha medo de um debate saudável. Isso pode levar a uma solução mais criativa e inovadora no final.",
        interpretation_rev: "Quando invertido, o Cinco de Paus pode indicar um desejo de evitar conflitos a todo custo. Você pode estar suprimindo suas próprias necessidades e opiniões para manter a paz, o que pode levar a ressentimento e acúmulo de tensão. Isso também pode ser um sinal de que um conflito está chegando ao fim, e você está pronto para encontrar um terreno comum. É um momento para liberar a tensão e encontrar uma maneira mais pacífica de resolver suas diferenças. É hora de ter uma conversa aberta e honesta para limpar o ar."
    },
    {
        name: "Seis de Paus",
        meaning_up: "Sucesso, reconhecimento público, vitória, progresso, autoconfiança",
        meaning_rev: "Sucesso privado, queda em desgraça, egotismo",
        desc: "O Seis de Paus é uma carta de vitória, sucesso e aclamação pública. Você superou os desafios e agora está sendo celebrado por suas conquistas.",
        interpretation_up: "Você mereceu sua volta da vitória. Esta carta é um sinal poderoso de sucesso, reconhecimento público e um momento merecido nos holofotes. Você trabalhou duro para superar os desafios, e agora é hora de desfrutar dos frutos do seu trabalho. Sua confiança está alta, e você tem todo o direito de se orgulhar de suas realizações. Compartilhe seu sucesso com os outros e permita que eles celebrem com você. Este é um momento de grande progresso e um sinal de que você está no caminho certo. Continue o bom trabalho.",
        interpretation_rev: "Invertido, o Seis de Paus pode sugerir um sucesso mais privado ou pessoal. Você pode ter alcançado um objetivo significativo, mas ainda não está pronto para compartilhá-lo com o mundo. Isso também pode ser um aviso contra o egotismo ou o medo do fracasso. Você pode estar tão focado em manter sua imagem pública que perdeu o contato com o que é verdadeiramente importante. Também pode indicar uma queda em desgraça ou uma falha em corresponder às expectativas. É um sinal de que você precisa encontrar uma forma mais autêntica e sustentável de sucesso, uma que não dependa da aprovação dos outros."
    },
    {
        name: "Sete de Paus",
        meaning_up: "Desafio, competição, perseverança, protetor, manter o controle",
        meaning_rev: "Desistir, sentir-se sobrecarregado, excessivamente protetor",
        desc: "O Sete de Paus representa um desafio, uma luta para proteger sua posição e a necessidade de perseverança. Você está sendo testado, mas tem a força para se manter firme.",
        interpretation_up: "Você está em uma posição de força, mas está sendo desafiado por outros. Este é um momento para se manter firme e defender o que você trabalhou tanto para alcançar. Você pode sentir que está lutando uma batalha difícil, mas tem a coragem e a perseverança para ter sucesso. Não desista. Confie em suas próprias habilidades e continue a lutar pelo que você acredita. Este é um teste de sua força e de suas convicções. Você tem o que é preciso para sair por cima.",
        interpretation_rev: "Quando invertido, o Sete de Paus pode indicar uma sensação de estar sobrecarregado e um desejo de desistir. Os desafios могут parecer grandes demais, e você pode estar questionando sua capacidade de ter sucesso. Isso também pode ser um sinal de que você está sendo excessivamente protetor ou defensivo. É um sinal de que você precisa encontrar uma nova fonte de força e reavaliar sua estratégia. Você está travando uma batalha que não pode vencer? Talvez seja hora de escolher suas batalhas com mais sabedoria. Ou talvez você precise pedir ajuda. Você não precisa fazer tudo sozinho."
    },
    {
        name: "Oito de Paus",
        meaning_up: "Velocidade, ação, viagem aérea, movimento, mudança rápida",
        meaning_rev: "Atrasos, frustração, resistir à mudança, alinhamento interno",
        desc: "O Oito de Paus é uma carta de ação rápida, movimento e comunicação. As coisas estão acontecendo rapidamente, e é um tempo de progresso e mudança rápida.",
        interpretation_up: "Prepare-se para um turbilhão de atividades. Esta carta é um sinal de que as coisas estão avançando em um ritmo acelerado. Você pode estar prestes a embarcar em uma viagem, ou pode receber notícias importantes que desencadeiam uma cadeia de eventos. Este é um momento de progresso emocionante e um sinal de que o universo está abrindo o caminho para você alcançar seus objetivos. Vá com o fluxo e esteja preparado para agir rapidamente. O tempo de espera acabou. É hora de agir e fazer as coisas acontecerem.",
        interpretation_rev: "Invertido, o Oito de Paus pode indicar um período de atrasos, frustração e uma resistência à mudança. Você pode estar se sentindo preso, como se seus planos не estivessem avançando tão rapidamente quanto você gostaria. Isso pode levar a um sentimento de impaciência e um desejo de forçar as coisas a acontecerem. É um sinal de que você precisa desacelerar e ser mais paciente. O universo tem seu próprio tempo. Isso também pode ser um sinal de que você precisa colocar sua própria vida em ordem antes de poder avançar. É hora de algum alinhamento interno."
    },
    {
        name: "Nove de Paus",
        meaning_up: "Resiliência, coragem, persistência, teste de fé, limites",
        meaning_rev: "Na defensiva, paranoia, hesitante, desafios esmagadores",
        desc: "O Nove de Paus representa resiliência, coragem e o empurrão final antes da vitória. Você está cansado da batalha, mas está tão perto da linha de chegada.",
        interpretation_up: "Você passou por muita coisa, mas ainda está de pé. Esta carta é um testemunho de sua resiliência, sua coragem e sua persistência inabalável. Você pode estar se sentindo ferido e cansado, mas não está pronto para desistir. Você está tão perto de alcançar seu objetivo, e este é o teste final de sua fé. Reúna sua força restante e dê um último empurrão. Você tem a coragem de levar isso até o fim. Não tenha medo de estabelecer limites e de se proteger. Você chegou longe demais para desistir agora.",
        interpretation_rev: "Quando invertido, o Nove de Paus pode indicar uma sensação de estar na defensiva e um senso de paranoia. Você pode ter tanto medo de se machucar que está afastando as pessoas. Isso também pode ser um sinal de que você está hesitante em dar o passo final em direção ao seu objetivo. Os desafios podem parecer esmagadores, e você pode estar questionando sua capacidade de ter sucesso. É um sinal de que você precisa abandonar seus medos e confiar em sua própria força. Você é mais resiliente do que pensa. É hora de baixar a guarda e pedir ajuda se precisar."
    },
    {
        name: "Dez de Paus",
        meaning_up: "Fardo, responsabilidade extra, trabalho duro, estresse, realização",
        meaning_rev: "Fazer tudo, carregar o fardo, delegação, liberação",
        desc: "O Dez de Paus representa o pesado fardo da responsabilidade e o estresse do excesso de trabalho. Você alcançou seu objetivo, mas agora está carregando o peso de tudo.",
        interpretation_up: "Você assumiu muita coisa, e agora está sentindo o peso de tudo. Esta carta é um sinal de que você está carregando um pesado fardo de responsabilidade. Você pode ter alcançado muito, mas isso teve um custo. Você está se sentindo estressado, sobrecarregado e à beira do esgotamento. É hora de dar um passo para trás e reavaliar suas prioridades. Você está tentando fazer demais? É hora de aprender a delegar e a pedir ajuda. Você não precisa carregar esse fardo sozinho.",
        interpretation_rev: "Invertido, o Dez de Paus é um poderoso chamado para liberar seus fardos. Você finalmente está percebendo que não pode fazer tudo sozinho, e está pronto para abrir mão de algumas de suas responsabilidades. Este é um tempo de libertação e um sinal de que você está pronto para encontrar uma maneira de viver mais equilibrada e sustentável. É hora de aprender a dizer não e a estabelecer limites saudáveis. Ao liberar o que não é mais seu para carregar, você liberará sua energia para as coisas que realmente importam."
    },
    {
        name: "Pajem de Paus",
        meaning_up: "Entusiasmo, exploração, descoberta, espírito livre",
        meaning_rev: "Bloqueios criativos, redirecionamento de energia, crenças autolimitantes",
        desc: "O Pajem de Paus é um mensageiro de novas ideias e energia criativa. Ele é um espírito livre, cheio de entusiasmo e um desejo de exploração.",
        interpretation_up: "Uma nova ideia ou uma nova paixão está chamando por você. Esta carta é um sinal de inspiração criativa e um desejo de explorar um novo território. Você está se sentindo entusiasmado e cheio de energia, e está pronto para embarcar em uma nova aventura. Este é um momento para descoberta e para permitir que seu espírito livre mostre o caminho. Não tenha medo de tentar algo novo ou de tomar um caminho diferente. O universo está lhe enviando uma mensagem de encorajamento. Siga sua paixão e veja aonde ela o leva.",
        interpretation_rev: "Quando invertido, o Pajem de Paus pode indicar um bloqueio criativo ou uma sensação de estar preso. Você pode ter uma ótima ideia, mas não sabe como começar. Isso também pode ser um sinal de que você está se segurando com crenças autolimitantes. É um sinal de que você precisa encontrar uma maneira de redirecionar sua energia. Você está focando nas coisas erradas? É hora de voltar a entrar em contato com o que realmente o inspira. Abandone seus medos e permita-se sonhar novamente."
    },
    {
        name: "Cavaleiro de Paus",
        meaning_up: "Energia, paixão, luxúria, ação, aventura, impulsividade",
        meaning_rev: "Projeto de paixão, pressa, energia dispersa, atrasos",
        desc: "O Cavaleiro de Paus é uma figura de ação, paixão e aventura. Ele está sempre em movimento, perseguindo seu próximo objetivo com uma energia ardente e às vezes impulsiva.",
        interpretation_up: "É hora de agir e perseguir suas paixões com um entusiasmo ardente. Esta carta é um sinal de uma explosão de energia e um desejo de aventura. Você está se sentindo ousado, confiante e pronto para conquistar o mundo. Este é um momento para ação, não para contemplação. Não tenha medo de ser um pouco impulsivo. Às vezes, você só precisa ir em frente. Sua paixão é seu guia, e está levando você a um novo e emocionante capítulo em sua vida. Abrace a aventura e aproveite a jornada.",
        interpretation_rev: "Invertido, o Cavaleiro de Paus pode alertar contra agir com muita pressa ou impulsividade. Você pode estar tão ansioso para começar que não está pensando nas coisas. Isso também pode indicar uma sensação de energia dispersa ou falta de foco. É um sinal de que você precisa desacelerar e ser mais estratégico em sua abordagem. Um projeto de paixão precisa de um plano sólido para ter sucesso. Isso também pode indicar um período de atrasos frustrantes. É um momento de ser paciente e esperar o momento certo para agir."
    },
    {
        name: "Rainha de Paus",
        meaning_up: "Coragem, confiança, independência, borboleta social, determinação",
        meaning_rev: "Auto-respeito, autoconfiança, introvertido, esgotamento",
        desc: "A Rainha de Paus é uma líder vibrante e confiante. Ela é independente, determinada e tem uma personalidade magnética que atrai as pessoas para ela.",
        interpretation_up: "Você está irradiando confiança e uma energia vibrante e magnética. Esta carta é um sinal de que você está no seu poder. Você é corajosa, independente e determinada a viver a vida em seus próprios termos. Você tem uma habilidade natural para inspirar os outros, e as pessoas são atraídas pelo seu calor e sua paixão. Este é um momento para ser social, compartilhar suas ideias e assumir a liderança. Você é a rainha de sua própria vida, e tem o poder de criar a realidade que deseja. Brilhe sua luz intensamente.",
        interpretation_rev: "Quando invertida, a Rainha de Paus pode indicar a necessidade de focar na autoconfiança e no auto-respeito. Você pode estar se sentindo insegura ou que perdeu seu fogo interior. Isso também pode ser um sinal de que você está se sentindo um pouco mais introvertida e que precisa de um tempo para si mesma para recarregar. É um aviso contra o esgotamento. Você pode ter dado muita de sua energia aos outros, e agora é hora de focar em suas próprias necessidades. É hora de reacender sua própria chama interior e de se lembrar de quão poderosa você realmente é."
    },
    {
        name: "Rei de Paus",
        meaning_up: "Líder nato, visão, empreendedor, honra, controle",
        meaning_rev: "Impulsividade, pressa, impiedoso, altas expectativas",
        desc: "O Rei de Paus é um líder visionário e um mestre de sua própria energia criativa. Ele é ousado, carismático e tem uma visão clara para o futuro.",
        interpretation_up: "Você é um líder nato com uma visão clara e inspiradora para o futuro. Esta carta é um sinal de que você tem o poder e o carisma para tornar seus sonhos realidade. Você não tem medo de correr riscos, e tem uma habilidade natural para inspirar os outros a segui-lo. Este é um momento para assumir o comando, compartilhar sua visão e liderar com confiança e integridade. Você tem o poder de criar um legado duradouro. Confie em sua visão e tenha a coragem de trazê-la à vida.",
        interpretation_rev: "Invertido, o Rei de Paus pode alertar contra ser muito impulsivo ou implacável em sua busca por seus objetivos. Você pode estar tão focado em sua visão que não está considerando o impacto de suas ações sobre os outros. Isso também pode indicar uma tendência a estabelecer expectativas impossivelmente altas para si mesmo e para os outros. É um sinal de que você precisa encontrar uma abordagem mais equilibrada e compassiva para a liderança. O verdadeiro poder não é sobre controle; é sobre inspiração. É hora de liderar com o coração, assim como com a cabeça."
    },
    // Naipe de Copas
    {
        name: "Ás de Copas",
        meaning_up: "Amor, novos relacionamentos, compaixão, criatividade",
        meaning_rev: "Amor-próprio, intuição, emoções reprimidas",
        desc: "O Ás de Copas representa um novo começo no reino emocional. É um símbolo de amor, compaixão e criatividade fluindo em sua vida.",
        interpretation_up: "Uma onda de energia emocional positiva está vindo em sua direção. Esta carta é um sinal de que seu coração está aberto e pronto para dar e receber amor. Pode sinalizar o início de um novo relacionamento, o aprofundamento de um existente ou um surto de inspiração criativa. Este é um momento de compaixão, tanto por si mesmo quanto pelos outros. Deixe suas emoções fluírem livremente e confie no poder de sua intuição. O universo está lhe oferecendo um presente de amor e felicidade. Esteja aberto para recebê-lo.",
        interpretation_rev: "Quando invertido, o Ás de Copas sugere que você pode estar bloqueando sua própria expressão emocional. Você pode estar reprimindo seus sentimentos ou negligenciando suas próprias necessidades emocionais. Este é um chamado para focar no amor-próprio e ouvir sua intuição. Você tem medo de ser vulnerável? É hora de explorar o que o está impedindo de abrir seu coração. Esta carta também pode indicar um bloqueio criativo ou uma sensação de estar emocionalmente insatisfeito. É um sinal de que você precisa se reconectar com sua própria fonte interior de amor e criatividade."
    },
    {
        name: "Dois de Copas",
        meaning_up: "Amor unificado, parceria, atração mútua, conexão",
        meaning_rev: "Separação, desarmonia, desconfiança, desequilíbrio",
        desc: "O Dois de Copas é uma carta de parceria e união. Representa uma conexão profunda entre duas pessoas, baseada no respeito mútuo, amor e compreensão.",
        interpretation_up: "Uma conexão poderosa e harmoniosa está se formando ou se aprofundando em sua vida. Esta carta é um belo sinal de uma parceria construída sobre amor e respeito mútuos. É um tempo de equilíbrio emocional e uma profunda compreensão entre duas pessoas. Pode ser um relacionamento romântico, uma amizade próxima ou uma parceria de negócios bem-sucedida. A chave é a conexão compartilhada e o dar e receber iguais. Abrace esta união e celebre o amor que vocês compartilham. Vocês são mais fortes juntos.",
        interpretation_rev: "Invertido, o Dois de Copas pode indicar uma ruptura em um relacionamento. Pode haver falta de comunicação, uma sensação de desequilíbrio ou uma desconfiança crescente. Isso pode levar a discussões e a uma sensação de desconexão. É um sinal de que você precisa trabalhar para restaurar a harmonia e o equilíbrio em sua parceria. É hora de uma conversa honesta para abordar as questões que estão causando a fenda. Se você é solteiro, esta carta pode sugerir que você ainda não está pronto para um relacionamento equilibrado e saudável."
    },
    {
        name: "Três de Copas",
        meaning_up: "Celebração, amizade, criatividade, colaborações",
        meaning_rev: "Independência, tempo sozinho, fofoca, excesso",
        desc: "O Três de Copas é uma carta de celebração alegre com amigos e comunidade. É um tempo de felicidade compartilhada, colaboração criativa e um senso de pertencimento.",
        interpretation_up: "É hora de reunir seus amigos e celebrar. Esta carta é um sinal de tempos felizes, amigades fortes e um alegre senso de comunidade. Você está cercado por pessoas que o amam e o apoiam, e é hora de compartilhar sua felicidade com elas. Este também é um ótimo momento para colaborações criativas. Suas energias combinadas podem levar a algo verdadeiramente belo. Abrace este tempo de conexão social e permita-se desfrutar do simples prazer da boa companhia. A vida é para ser compartilhada.",
        interpretation_rev: "Quando invertido, o Três de Copas pode sugerir a necessidade de algum tempo sozinho. Você pode estar se sentindo um pouco sobrecarregado por obrigações sociais e precisar de um tempo para recarregar. Também pode ser um aviso contra fofocas ou excessos. Você pode estar passando muito tempo festejando e não tempo suficiente focando em suas verdadeiras prioridades. Em um sentido criativo, pode indicar um projeto que é melhor trabalhado sozinho. É um sinal de que você precisa encontrar um equilíbrio entre sua vida social e suas necessidades pessoais."
    },
    {
        name: "Quatro de Copas",
        meaning_up: "Apatia, contemplação, desconexão, reavaliação",
        meaning_rev: "Retiro, retraimento, gratidão, nova perspectiva",
        desc: "O Quatro de Copas representa um tempo de apatia e contemplação. Você pode estar se sentindo desconectado de suas emoções e desinteressado das oportunidades ao seu redor.",
        interpretation_up: "Estão lhe oferecendo um presente, mas você não está com vontade de recebê-lo. Esta carta é um sinal de apatia, tédio e uma sensação de estar emocionalmente desconectado. Você pode estar tão focado no que lhe falta que não está vendo as bênçãos que estão bem na sua frente. Este é um momento para introspecção e uma reavaliação do que realmente o faz feliz. O que é que você está realmente procurando? O universo está lhe oferecendo uma oportunidade, mas você deve estar disposto a abrir os olhos e vê-la.",
        interpretation_rev: "Invertido, o Quatro de Copas pode indicar um período de retraimento e introspecção que está levando a uma nova perspectiva. Você tirou um tempo para ficar sozinho e pensar sobre o que quer, e agora está pronto para se reengajar com o mundo com um senso de propósito renovado. Este é um momento de gratidão e de apreciar as bênçãos em sua vida. Você não está mais dando as coisas como garantidas. Você está pronto para dizer sim às oportunidades que o universo está lhe oferecendo."
    },
    {
        name: "Cinco de Copas",
        meaning_up: "Perda, arrependimento, decepção, luto, pessimismo",
        meaning_rev: "Seguir em frente, aceitação, perdão, encontrar a paz",
        desc: "O Cinco de Copas é uma carta de perda, tristeza e arrependimento. Representa um tempo de remoer o passado e focar no que deu errado.",
        interpretation_up: "Você está focando no que perdeu, e isso está lhe causando muita dor. Esta carta é um sinal de luto, decepção e uma tendência a remoer o passado. Embora seja importante reconhecer seus sentimentos de perda, também é importante lembrar que ainda há esperança. Há duas taças ainda de pé atrás de você, cheias de potencial. É hora de se virar e ver o que ainda é possível. Não deixe que suas tristezas passadas o ceguem para as oportunidades do futuro. É hora de começar a curar.",
        interpretation_rev: "Quando invertido, o Cinco de Copas é um sinal de que você está pronto para superar uma perda passada. Você está começando a aceitar o que aconteceu, e está pronto para perdoar, tanto a si mesmo quanto aos outros. Este é um tempo de cura e de encontrar a paz. Você não é mais definido por suas tristezas passadas. Você está pronto para voltar sua atenção para o futuro e abraçar as novas oportunidades que estão vindo em sua direção. Você aprendeu uma lição valiosa com seu passado, e agora está pronto para usar essa sabedoria para criar um futuro mais brilhante."
    },
    {
        name: "Seis de Copas",
        meaning_up: "Nostalgia, memórias de infância, inocência, reencontro",
        meaning_rev: "Viver no passado, deixar ir, seguir em frente",
        desc: "O Seis de Copas é uma carta de nostalgia e memórias felizes. Muitas vezes representa uma conexão com o passado, um reencontro com um velho amigo ou um retorno a um lugar de conforto.",
        interpretation_up: "Um doce sentimento de nostalgia está no ar. Esta carta é um sinal de memórias felizes, uma conexão com sua criança interior e as alegrias simples do passado. Você pode estar se reconectando com velhos amigos ou retornando a um lugar que parece um lar. Este é um momento de inocência, bondade e generosidade. Abrace o calor dessas memórias e permita que elas lhe tragam conforto. O passado tem um presente para você, e é um lembrete do amor e da felicidade que moldaram quem você é hoje.",
        interpretation_rev: "Invertido, o Seis de Copas pode ser um aviso contra viver no passado. Embora seja bom relembrar, não é saudável ficar preso lá. Você pode estar idealizando o passado e evitando os desafios do presente. É hora de deixar ir o que foi e focar no que é. Isso também pode ser um sinal de que você está pronto para superar uma memória difícil da infância. Você não é mais definido pelo seu passado, e está pronto para criar um futuro novo e mais feliz para si mesmo."
    },
    {
        name: "Sete de Copas",
        meaning_up: "Escolhas, oportunidades, fantasia, ilusão, pensamento positivo",
        meaning_rev: "Clareza, determinação, fazer uma escolha, evitar a tentação",
        desc: "O Sete de Copas é uma carta de escolhas e imaginação. Você se depara com muitas oportunidades, mas nem todas são o que parecem.",
        interpretation_up: "Você se depara com uma variedade estonteante de escolhas, e é difícil saber qual escolher. Esta carta é um sinal de uma imaginação vívida e uma tendência ao pensamento positivo. Embora seja ótimo ter opções, você precisa ter cuidado para não se perder em um mundo de fantasia. Nem tudo que reluz é ouro. É hora de se firmar e pensar realisticamente sobre suas escolhas. O que é realmente alcançável? E o que é apenas uma bela ilusão? Pesquise e faça uma escolha baseada tanto no seu coração quanto na sua cabeça.",
        interpretation_rev: "Quando invertido, o Sete de Copas é um sinal de clareza e foco. Você superou as ilusões e sabe o que quer. Você não está mais distraído por um milhão de possibilidades diferentes. Você fez uma escolha e está determinado a levá-la até o fim. Este é um momento de ação prática e um compromisso com seus objetivos. Você não está mais vivendo em um mundo de fantasia; você está criando sua própria realidade. Você aprendeu a confiar em seu próprio julgamento, e isso está o levando na direção certa."
    },
    {
        name: "Oito de Copas",
        meaning_up: "Ir embora, decepção, deixar algo para trás, escapismo",
        meaning_rev: "Indecisão, medo do desconhecido, retornar a uma situação ruim",
        desc: "O Oito de Copas representa um tempo de se afastar de uma situação que não é mais gratificante. É uma escolha difícil, mas necessária para o seu bem-estar emocional.",
        interpretation_up: "Você está tomando a difícil decisão de se afastar de algo que um dia você prezou. Esta carta é um sinal de decepção e a percepção de que o que você pensava que lhe traria felicidade está, na verdade, deixando-o vazio. É preciso coragem para deixar para trás o que é familiar, mas você sabe que precisa. Você está em uma busca por algo mais, algo que realmente nutrirá sua alma. Este é um momento de transição e uma busca por um significado mais profundo. Confie que você está no caminho certo, mesmo que ainda não saiba para onde ele está o levando.",
        interpretation_rev: "Invertido, o Oito de Copas pode indicar um medo de fazer uma mudança necessária. Você pode saber que precisa se afastar de uma situação, mas tem medo do desconhecido. Isso pode levar a uma sensação de estar preso e a um sentimento de desesperança. Também pode ser um sinal de que você está tentado a retornar a uma situação ruim, simplesmente porque é familiar. É um sinal de que você precisa encontrar a coragem para fazer a mudança que sabe que é certa para você. Sua felicidade vale o risco."
    },
    {
        name: "Nove de Copas",
        meaning_up: "Realização de desejos, contentamento, satisfação, prazer, gratidão",
        meaning_rev: "Insatisfação, materialismo, expectativas irreais",
        desc: "O Nove de Copas é muitas vezes chamado de 'a carta dos desejos'. Representa um tempo de contentamento, satisfação e a realização de seus desejos.",
        interpretation_up: "Seu desejo está prestes a se tornar realidade. Esta é uma das cartas mais positivas do baralho, e é um sinal de que você está prestes a conseguir exatamente o que esperava. Este é um tempo de profundo contentamento, satisfação e um sentimento de realização emocional. Você trabalhou duro para chegar aqui, e agora é hora de desfrutar dos frutos do seu trabalho. Seja grato por suas bênçãos e permita-se banhar no brilho do seu sucesso. Você criou uma vida que ama, e merece toda a felicidade que está vindo em sua direção.",
        interpretation_rev: "Quando invertido, o Nove de Copas pode indicar um sentimento de insatisfação, apesar de ter tudo o que você pensava que queria. Você pode estar tão focado em posses materiais que perdeu o contato com o que realmente lhe traz alegria. Isso também pode ser um aviso contra ter expectativas irreais. Você pode estar se preparando para a decepção esperando a perfeição. É um sinal de que você precisa encontrar uma forma mais autêntica e sustentável de felicidade, uma que venha de dentro."
    },
    {
        name: "Dez de Copas",
        meaning_up: "Família feliz, harmonia, casamento, realização emocional, alegria",
        meaning_rev: "Família desfeita, desarmonia, casamento infeliz, necessidades não atendidas",
        desc: "O Dez de Copas representa o máximo em realização emocional. É uma carta de famílias felizes, relacionamentos amorosos e um profundo senso de paz e harmonia.",
        interpretation_up: "Você encontrou o seu 'felizes para sempre'. Esta carta é um belo sinal de uma família amorosa, um lar harmonioso e um profundo senso de realização emocional. Você está cercado de amor e sente uma profunda conexão com as pessoas em sua vida. Este é um tempo de alegria, paz e um sentimento de ser verdadeiramente abençoado. Seus sonhos se tornaram realidade, e você está vivendo uma vida em perfeito alinhamento com seus valores. Aprecie este momento de pura felicidade.",
        interpretation_rev: "Invertido, o Dez de Copas pode indicar uma quebra na harmonia familiar. Pode haver conflito, falta de comunicação ou um sentimento de estar emocionalmente desconectado de seus entes queridos. Isso pode levar a uma sensação de tristeza e a um sentimento de que suas necessidades emocionais não estão sendo atendidas. É um sinal de que você precisa trabalhar para restaurar a paz e a harmonia em seu lar. É hora de uma conversa aberta e honesta para abordar as questões que estão causando o conflito. Vale a pena lutar por sua família."
    },
    {
        name: "Pajem de Copas",
        meaning_up: "Mensagens criativas, intuição, curiosidade, novas emoções",
        meaning_rev: "Imaturidade emocional, bloqueios criativos, duvidar de si mesmo",
        desc: "O Pajem de Copas é um mensageiro de inspiração criativa e sensibilidade emocional. Ele é uma alma gentil e intuitiva, aberta a novas ideias e sentimentos.",
        interpretation_up: "Uma nova oportunidade emocional ou criativa está no horizonte. Esta carta é um sinal de uma mensagem de sua intuição, uma centelha de inspiração criativa ou o início de uma nova jornada emocional. Você está se sentindo curioso e de coração aberto, e está pronto para explorar seus sentimentos de uma nova maneira. Este é um momento para ouvir seu coração e confiar em seus sentimentos viscerais. Um novo projeto criativo ou um novo relacionamento pode estar logo ali. Esteja aberto às possibilidades.",
        interpretation_rev: "Quando invertido, o Pajem de Copas pode indicar um bloqueio criativo ou um sentimento de imaturidade emocional. Você pode ter medo de expressar seus sentimentos, ou pode estar duvidando de suas próprias habilidades criativas. Isso pode levar a uma sensação de estar preso e sem inspiração. É um sinal de que você precisa voltar a entrar em contato com sua própria criança interior e se permitir ser mais brincalhão e espontâneo. Abandone sua auto-dúvida e permita que sua criatividade flua."
    },
    {
        name: "Cavaleiro de Copas",
        meaning_up: "Romance, charme, imaginação, ofertas, seguir seu coração",
        meaning_rev: "Irrealista, ciúme, mau humor, manipulação emocional",
        desc: "O Cavaleiro de Copas é um sonhador romântico e charmoso. Ele é um cavaleiro de armadura brilhante, seguindo seu coração e liderando com suas emoções.",
        interpretation_up: "Você está sendo arrebatado por uma onda de romance e inspiração criativa. Esta carta é um sinal de uma oferta charmosa e romântica, um novo projeto criativo ou um chamado para seguir seu coração. Você está se sentindo idealista e cheio de imaginação, e está pronto para perseguir seus sonhos com uma intensidade apaixonada. Este é um momento para deixar suas emoções serem seu guia. Confie no poder do amor e permita-se ser um pouco sonhador. Seu coração conhece o caminho.",
        interpretation_rev: "Invertido, o Cavaleiro de Copas pode ser um aviso contra ser muito irrealista ou se perder em um mundo de fantasia. Você pode estar tão envolvido no romance de uma ideia que não está vendo as realidades práticas. Isso também pode ser um sinal de ciúme, mau humor ou manipulação emocional. É um sinal de que você precisa encontrar um equilíbrio entre seu coração e sua cabeça. É importante seguir seus sonhos, mas você também precisa ter um plano sólido para torná-los realidade."
    },
    {
        name: "Rainha de Copas",
        meaning_up: "Compaixão, intuição, segurança emocional, calma, nutrição",
        meaning_rev: "Insegurança, sobrecarga emocional, co-dependência, martírio",
        desc: "A Rainha de Copas é uma governante compassiva e intuitiva. Ela é emocionalmente madura, em contato com seus sentimentos e uma fonte de conforto e apoio para os outros.",
        interpretation_up: "Você é uma presença calma e compassiva em um mundo de turbulência emocional. Esta carta é um sinal de sua profunda intuição, sua maturidade emocional e sua capacidade de nutrir e apoiar os outros. Você está em contato com seus próprios sentimentos e não tem medo de ser vulnerável. Isso faz de você uma fonte de grande conforto e sabedoria para aqueles ao seu redor. Este é um momento para confiar em sua intuição e liderar com o coração. Você tem o poder de curar, tanto a si mesmo quanto aos outros.",
        interpretation_rev: "Quando invertida, a Rainha de Copas pode indicar uma sensação de estar emocionalmente sobrecarregada ou insegura. Você pode estar assumindo a bagagem emocional dos outros, e isso está começando a te afetar. Isso também pode ser um sinal de co-dependência ou uma tendência a se fazer de mártir. É um sinal de que você precisa estabelecer alguns limites emocionais saudáveis e focar em seu próprio autocuidado. Não há problema em dizer não e priorizar seu próprio bem-estar."
    },
    {
        name: "Rei de Copas",
        meaning_up: "Equilíbrio emocional, compaixão, diplomacia, controle",
        meaning_rev: "Manipulação emocional, mau humor, volatilidade",
        desc: "O Rei de Copas é um mestre do reino emocional. Ele é compassivo e diplomático, mas mantém uma postura calma e controlada.",
        interpretation_up: "Você alcançou o domínio de suas emoções. Esta carta é um sinal de equilíbrio emocional, compaixão e uma abordagem calma e diplomática da vida. Você é capaz de entender e gerenciar seus próprios sentimentos, e pode oferecer conselhos sábios e compassivos aos outros. Este é um tempo de maturidade emocional e um profundo senso de paz interior. Você é um pilar de força e estabilidade em um mundo de caos. Confie em sua capacidade de liderar com o coração e a cabeça.",
        interpretation_rev: "Invertido, o Rei de Copas pode alertar sobre manipulação emocional ou uma tendência a ser temperamental e volátil. Você pode estar usando sua inteligência emocional para controlar os outros, ou pode estar lutando para controlar suas próprias emoções. Isso pode levar a uma sensação de ser emocionalmente instável e imprevisível. É um sinal de que você precisa encontrar seu centro emocional e aprender a expressar seus sentimentos de uma maneira mais saudável e construtiva. O verdadeiro domínio emocional é sobre equilíbrio, não controle."
    },
    // Naipe de Espadas
    {
        name: "Ás de Espadas",
        meaning_up: "Rupturas, novas ideias, clareza mental, sucesso",
        meaning_rev: "Clareza interior, repensar uma ideia, julgamento nublado",
        desc: "O Ás de Espadas representa uma nova ideia ou uma ruptura no entendimento. É um símbolo de clareza mental, verdade e o poder do intelecto.",
        interpretation_up: "Um momento de pura clareza está sobre você. Esta carta é um sinal de uma poderosa ruptura, uma nova ideia brilhante ou uma nova maneira de pensar que atravessa toda a confusão. Você está vendo a verdade de uma situação com uma mente afiada e focada. Este é um momento para comunicação clara, autoexpressão honesta e tomada de decisões baseada na lógica e na razão. O universo está lhe oferecendo a espada da verdade. Use-a com sabedoria para abrir um caminho para o sucesso.",
        interpretation_rev: "Quando invertido, o Ás de Espadas pode indicar julgamento nublado ou dificuldade em expressar suas ideias com clareza. Você pode estar se sentindo confuso ou que não está vendo uma situação como ela realmente é. Isso também pode ser um sinal de que uma nova ideia precisa de mais tempo para se desenvolver antes de estar pronta para ser compartilhada. É um chamado para a clareza interior. Tire um tempo para aquietar sua mente e ir ao cerne da questão. A verdade está dentro de você; você só precisa limpar a desordem mental para encontrá-la."
    },
    {
        name: "Dois de Espadas",
        meaning_up: "Decisões difíceis, pesar opções, um impasse, evitação",
        meaning_rev: "Indecisão, confusão, sobrecarga de informação, impasse",
        desc: "O Dois de Espadas representa um impasse ou uma decisão difícil. Você está em uma encruzilhada e tentando encontrar um equilíbrio entre duas forças opostas.",
        interpretation_up: "Você está enfrentando uma escolha difícil e não sabe que caminho seguir. Esta carta é um sinal de um impasse, onde você está tentando tomar uma decisão com a cabeça, mas seu coração não concorda. Você pode estar bloqueando suas emoções para tentar ser objetivo, mas isso só está tornando a decisão mais difícil. É um momento para uma trégua, um momento de contemplação silenciosa antes de fazer seu próximo movimento. Você precisa encontrar uma maneira de equilibrar seus pensamentos e sentimentos para encontrar o caminho certo a seguir.",
        interpretation_rev: "Invertido, o Dois de Espadas pode indicar um estado de paralisia por análise. Você está tão sobrecarregado de informações e opções que não consegue tomar nenhuma decisão. Isso pode levar a uma sensação de estar preso e a um profundo sentimento de confusão. É um sinal de que você precisa confiar em sua intuição. Você já pensou o suficiente. Agora é hora de ouvir seu instinto. O que seu coração lhe diz para fazer? A resposta certa pode não ser a mais lógica."
    },
    {
        name: "Três de Espadas",
        meaning_up: "Coração partido, dor emocional, tristeza, luto, mágoa",
        meaning_rev: "Autocrítica negativa, liberar a dor, otimismo, perdão",
        desc: "O Três de Espadas é uma carta de coração partido, tristeza e verdades dolorosas. Representa uma liberação emocional difícil, mas necessária.",
        interpretation_up: "Uma verdade dolorosa perfurou seu coração, e você está passando por um período de profunda tristeza. Esta é uma carta difícil de receber, mas também necessária. É um sinal de que você precisa se permitir sentir a dor de uma perda ou traição. Não tente suprimir suas emoções. A única saída é através. Este é um momento para o luto e para permitir que suas lágrimas limpem sua alma. Embora doa agora, esta experiência acabará por torná-lo mais forte e mais compassivo.",
        interpretation_rev: "Quando invertido, o Três de Espadas pode indicar que você está virando as espadas contra si mesmo. Você pode estar se envolvendo em autocrítica negativa e sendo seu pior crítico. É hora de liberar essa dor autoinfligida e praticar a autocompaixão. Isso também pode ser um sinal de que você está pronto para superar um coração partido do passado. Você está começando a ver o lado bom, e está pronto para perdoar e deixar ir. O pior já passou, e é hora de começar a curar."
    },
    {
        name: "Quatro de Espadas",
        meaning_up: "Descanso, relaxamento, meditação, contemplação, recuperação",
        meaning_rev: "Exaustão, esgotamento, contemplação profunda, estagnação",
        desc: "O Quatro de Espadas é uma carta de descanso e recuperação. Representa um tempo para contemplação silenciosa, meditação e cura após um período de estresse.",
        interpretation_up: "É hora de fazer uma pausa merecida. Esta carta é um sinal de que você precisa descansar, se recuperar e recarregar as baterias. Você passou por muita coisa, e agora é hora de uma contemplação silenciosa. Isso не é um sinal de derrota, mas uma retirada estratégica. Você precisa deste tempo para se curar e reunir forças para o próximo capítulo. Então, baixe sua espada, aquiete sua mente e permita-se apenas ser. O mundo pode esperar.",
        interpretation_rev: "Invertido, o Quatro de Espadas pode ser um aviso contra se esforçar demais. Você pode estar à beira de um esgotamento sério e ignorando os sinais que seu corpo e mente estão lhe dizendo. Isso também pode indicar um período de estagnação, onde você tem tanto medo de agir que não está avançando de forma alguma. É um sinal de que você precisa fazer uma pausa, quer pense que tem tempo para isso ou не. Sua saúde e bem-estar devem ser sua principal prioridade."
    },
    {
        name: "Cinco de Espadas",
        meaning_up: "Conflito, competição, derrota, vencer a todo custo, traição",
        meaning_rev: "Reconciliação, fazer as pazes, ressentimento passado",
        desc: "O Cinco de Espadas é uma carta de conflito e derrota. Representa uma situação onde não há vencedores verdadeiros, apenas perdas e arrependimentos.",
        interpretation_up: "Você pode ter vencido a batalha, mas a que custo? Esta carta é um sinal de uma vitória vazia, onde você alienou os outros e criou muito ressentimento no processo. Isso também pode representar uma situação em que você se sente derrotado e foi tratado injustamente. É um tempo de conflito, traição e uma sensação geral de mal-estar. A lição aqui é escolher suas batalhas com sabedoria e considerar as consequências de suas ações. Realmente vale a pena vencer a todo custo?",
        interpretation_rev: "Quando invertido, o Cinco de Espadas é um sinal de que um conflito está chegando ao fim, e há um desejo de reconciliação. Você está pronto para fazer as pazes e deixar de lado os ressentimentos passados. Este é um momento de perdão, tanto para si mesmo quanto para os outros. Você está percebendo que guardar raiva só está te machucando. É hora de baixar sua espada e escolher a paz. Não se trata de quem estava certo ou errado; se trata de avançar de uma maneira mais harmoniosa."
    },
    {
        name: "Seis de Espadas",
        meaning_up: "Transição, mudança, rito de passagem, liberar bagagem",
        meaning_rev: "Transição pessoal, resistência à mudança, assuntos inacabados",
        desc: "O Seis de Espadas representa uma jornada de um passado conturbado para um futuro mais pacífico. É uma carta de transição e uma partida necessária, mas muitas vezes triste.",
        interpretation_up: "Você está se mudando para águas mais calmas. Esta carta é um sinal de uma transição necessária, uma jornada para longe de uma situação difícil em direção a um futuro mais esperançoso. Pode ser uma partida triste, mas você sabe que é para o melhor. Você está deixando seus problemas para trás e está pronto para começar um novo capítulo. Este é um momento de cura e de olhar para frente com um sentimento tranquilo de otimismo. A jornada pode ser longa, mas você está indo na direção certa.",
        interpretation_rev: "Quando invertido, o Seis de Espadas pode indicar uma resistência à mudança. Você pode saber que precisa superar uma situação, mas tem medo de dar o primeiro passo. Isso também pode ser um sinal de negócios inacabados. Você pode estar tentando seguir em frente, mas ainda está carregando muita bagagem emocional do passado. É um sinal de que você precisa encontrar uma maneira de deixar ir e fazer as pazes com seu passado antes de poder realmente avançar."
    },
    {
        name: "Sete de Espadas",
        meaning_up: "Traição, engano, safar-se com algo, furtividade",
        meaning_rev: "Síndrome do impostor, enganar a si mesmo, guardar segredos",
        desc: "O Sete de Espadas é uma carta de estratégia, astúcia e, às vezes, engano. Representa uma situação onde você precisa ser inteligente e pensar rápido.",
        interpretation_up: "Você está em uma situação que requer um pouco de furtividade e estratégia. Esta carta pode representar a necessidade de agir sozinho, pegar um atalho ou pensar fora da caixa. Também pode ser um aviso de engano ou traição. Alguém pode estar tentando se safar com algo, ou você pode ser aquele que não está sendo totalmente honesto. É um momento para estar em guarda e confiar em seus instintos. Nem todo mundo tem seus melhores interesses no coração.",
        interpretation_rev: "Quando invertido, o Sete de Espadas pode indicar que você está se enganando. Você pode estar mentindo para si mesmo sobre uma situação, ou pode estar lutando com a síndrome do impostor. Também pode ser um sinal de que você está pronto para se abrir e confessar um segredo. Você está cansado de viver uma mentira, e está pronto para enfrentar as consequências de suas ações. É um momento de honestidade, tanto consigo mesmo quanto com os outros."
    },
    {
        name: "Oito de Espadas",
        meaning_up: "Pensamentos negativos, restrição autoimposta, aprisionamento, mentalidade de vítima",
        meaning_rev: "Crenças autolimitantes, crítico interior, liberar pensamentos negativos, aberto a novas perspectivas",
        desc: "O Oito de Espadas representa uma sensação de estar preso e impotente. No entanto, a armadilha é muitas vezes autoimposta, resultado de pensamentos negativos e uma mentalidade de vítima.",
        interpretation_up: "Você está se sentindo preso e desamparado, mas a verdade é que você tem o poder de se libertar. Esta carta é um sinal de uma prisão autoimposta, onde seus próprios pensamentos negativos e crenças limitantes o mantêm cativo. Você está tão focado nas espadas ao seu redor que não está vendo o caminho claro para a liberdade. É hora de mudar sua perspectiva. Você não é uma vítima. Você tem o poder de tirar a venda e se afastar desta situação. O primeiro passo é acreditar que você pode.",
        interpretation_rev: "Quando invertido, o Oito de Espadas é um sinal de uma grande ruptura. Você finalmente está percebendo que é você quem tem se segurado. Você está pronto para liberar suas crenças autolimitantes e desafiar seu crítico interior. Este é um tempo de libertação e um novo senso de poder pessoal. Você não é mais um prisioneiro de sua própria mente. Você está aberto a novas perspectivas, e está pronto para criar uma realidade nova e mais fortalecedora para si mesmo."
    },
    {
        name: "Nove de Espadas",
        meaning_up: "Ansiedade, preocupação, medo, depressão, pesadelos",
        meaning_rev: "Turbulência interior, medos profundos, segredos, liberar preocupação",
        desc: "O Nove de Espadas é a carta da ansiedade e do desespero. Representa um tempo de angústia mental, preocupação e noites sem dormir.",
        interpretation_up: "Sua mente é um campo de batalha agora, e você está sendo atormentado por seus próprios pensamentos. Esta carta é um sinal de profunda ansiedade, preocupação e uma sensação de estar sobrecarregado por seus medos. Você pode estar tendo pesadelos ou não conseguir dormir por causa da constante tagarelice mental. É importante lembrar que estes são apenas pensamentos, não a realidade. É hora de procurar ajuda e encontrar uma maneira de aquietar sua mente. Você não precisa sofrer em silêncio. Procure alguém de confiança e compartilhe o que está em sua mente.",
        interpretation_rev: "Quando invertido, o Nove de Espadas pode indicar que você finalmente está pronto para enfrentar seus medos profundos. Você não está mais disposto a deixar sua ansiedade controlá-lo. Isso também pode ser um sinal de que você está liberando um segredo sombrio que o tem pesado. Este é um tempo de profunda turbulência interior, mas está levando a uma cura poderosa. Você está aprendendo a gerenciar sua ansiedade e a encontrar um senso de paz interior. O pior já passou, e você está no caminho da recuperação."
    },
    {
        name: "Dez de Espadas",
        meaning_up: "Finais dolorosos, feridas profundas, traição, perda, crise",
        meaning_rev: "Recuperação, regeneração, resistir a um fim inevitável",
        desc: "O Dez de Espadas representa um final doloroso e dramático. É uma carta de traição, perda e de chegar ao fundo do poço.",
        interpretation_up: "Você chegou a um ponto de ruptura, e é uma experiência dolorosa e difícil. Esta carta é um sinal de um final dramático, uma traição ou um profundo sentimento de perda. Você pode se sentir como se tivesse sido apunhalado pelas costas, e está no seu ponto mais baixo. Embora esta seja uma carta de dor profunda, também é um sinal de que o pior já passou. O amanhecer está chegando. Este é o fim de um ciclo, e deste lugar de rendição total, você pode começar a reconstruir. Você não tem para onde ir a não ser para cima.",
        interpretation_rev: "Quando invertido, o Dez de Espadas pode indicar que você está resistindo a um final inevitável. Você pode estar tentando se agarrar a uma situação que não lhe serve mais, o que só está prolongando sua dor. Também pode ser um sinal de que você está em processo de recuperação de uma grande crise. Você está lentamente tirando as espadas de suas costas, e está começando a se curar. Este é um tempo de regeneração e um retorno lento, mas constante, à saúde. Você é um sobrevivente."
    },
    {
        name: "Pajem de Espadas",
        meaning_up: "Novas ideias, curiosidade, sede de conhecimento, novas formas de comunicação",
        meaning_rev: "Autoexpressão, só fala e nenhuma ação, ação aleatória",
        desc: "O Pajem de Espadas é um mensageiro de novas ideias e uma sede de conhecimento. Ele é curioso, enérgico e está sempre fazendo perguntas.",
        interpretation_up: "Uma nova ideia ou uma nova maneira de pensar está despertando sua curiosidade. Esta carta é um sinal de sede de conhecimento e um desejo de aprender algo novo. Você está cheio de energia e ansioso para compartilhar suas ideias com os outros. Este é um momento para comunicação clara, para fazer perguntas e para explorar novas paisagens mentais. Não tenha medo de ser um iniciante. Sua curiosidade é seu maior trunfo agora. Abrace esta nova jornada intelectual.",
        interpretation_rev: "Quando invertido, o Pajem de Espadas pode ser um sinal de muita fala e nenhuma ação. Você pode ter muitas ideias ótimas, mas não está se esforçando para torná-las realidade. Isso também pode ser um aviso contra falar sem pensar. Você pode estar magoando os outros com suas palavras sem nem perceber. É um sinal de que você precisa ser mais consciente de como se comunica. É hora de apoiar suas palavras com ações."
    },
    {
        name: "Cavaleiro de Espadas",
        meaning_up: "Ambicioso, orientado para a ação, pensamento rápido, direto, comunicativo",
        meaning_rev: "Inquieto, desfocado, impulsivo, esgotamento",
        desc: "O Cavaleiro de Espadas é uma figura de ação e ambição. Ele é um pensador rápido que avança com um foco obstinado em seus objetivos.",
        interpretation_up: "Você está em uma missão, e nada vai ficar em seu caminho. Esta carta é um sinal de uma mente afiada, um foco claro e um impulso implacável para ter sucesso. Você está pensando rápido, e não tem medo de ser direto em sua comunicação. Este é um momento para ação ambiciosa e para cortar todos os obstáculos para alcançar seu objetivo. Seu intelecto é sua maior arma. Use-o para criar um plano de ataque claro e para executá-lo com precisão e velocidade.",
        interpretation_rev: "Quando invertido, o Cavaleiro de Espadas pode alertar contra ser muito impulsivo ou agressivo. Você pode estar tão focado em seu objetivo que não está considerando as consequências de suas ações. Isso também pode indicar uma sensação de estar inquieto e desfocado, como se estivesse avançando em todas as direções ao mesmo tempo. É um sinal de que você precisa desacelerar, pensar antes de agir e encontrar um ritmo mais sustentável. Caso contrário, você está caminhando para um grande esgotamento."
    },
    {
        name: "Rainha de Espadas",
        meaning_up: "Independente, julgamento imparcial, limites claros, comunicação direta",
        meaning_rev: "Excessivamente emocional, facilmente influenciada, malvada, de coração frio",
        desc: "A Rainha de Espadas é uma governante afiada e inteligente. Ela é independente, uma comunicadora clara e uma juíza justa e imparcial.",
        interpretation_up: "Você é uma mulher de intelecto afiado e integridade inabalável. Esta carta é um sinal de sua capacidade de ver a verdade de uma situação com uma mente clara e imparcial. Você não tem medo de falar a sua verdade, e tem um dom para estabelecer limites claros. Este é um momento para o pensamento independente e para confiar em seu próprio julgamento. Você tem uma sabedoria que vem da experiência, e não é facilmente influenciada pela emoção. Você é uma voz poderosa e respeitada da razão.",
        interpretation_rev: "Quando invertida, a Rainha de Espadas pode indicar que você está deixando suas emoções nublarem seu julgamento. Você pode estar se sentindo excessivamente sensível ou sendo facilmente influenciada pelas opiniões dos outros. Isso também pode ser um aviso contra ser de coração frio ou excessivamente crítica. É um sinal de que você precisa encontrar um equilíbrio entre sua cabeça e seu coração. É importante ser racional, mas também é importante ser compassivo."
    },
    {
        name: "Rei de Espadas",
        meaning_up: "Clareza mental, poder intelectual, autoridade, verdade",
        meaning_rev: "Poder silencioso, verdade interior, uso indevido do poder, manipulação",
        desc: "O Rei de Espadas é um mestre do intelecto. Ele é uma figura de autoridade que governa com lógica, verdade e um profundo entendimento da lei.",
        interpretation_up: "Você é uma autoridade em sua área, e sua mente é seu reino. Esta carta é um sinal de seu poder intelectual, sua clareza mental e sua capacidade de liderar com verdade e integridade. Você é um mestre da lógica, e tem um profundo entendimento de sistemas complexos. Este é um momento para confiar em sua própria expertise e compartilhar sua sabedoria com os outros. Você é um líder justo e equitativo, e suas decisões são baseadas em uma avaliação clara e imparcial dos fatos. Sua palavra é lei.",
        interpretation_rev: "Quando invertido, o Rei de Espadas pode ser um aviso contra o uso indevido do poder. Você pode estar usando sua inteligência para manipular ou controlar os outros. Isso também pode indicar uma luta com sua própria verdade interior. Você pode estar tão focado na lógica que perdeu o contato com sua própria intuição. É um sinal de que você precisa encontrar uma forma mais equilibrada e compassiva de liderança. O verdadeiro poder não é sobre estar certo; é sobre ser sábio."
    },
    // Naipe de Ouros
    {
        name: "Ás de Ouros",
        meaning_up: "Oportunidade, prosperidade, novo empreendimento, manifestação",
        meaning_rev: "Oportunidade perdida, falta de planejamento, ganância",
        desc: "O Ás de Ouros representa uma nova oportunidade no mundo material. É uma semente de prosperidade, um novo emprego ou o início de um novo empreendimento bem-sucedido.",
        interpretation_up: "Uma oportunidade de ouro está sendo apresentada a você. Esta carta é um sinal de um novo começo em suas finanças, carreira ou vida doméstica. É uma semente de prosperidade que tem o potencial de se transformar em algo verdadeiramente abundante. Este é um momento para ação prática e para tornar seus sonhos uma realidade tangível. O universo está lhe oferecendo um presente de segurança e estabilidade. Aceite-o e use-o para construir uma base sólida para o seu futuro. O momento é propício para investir em si mesmo e em seus objetivos.",
        interpretation_rev: "Quando invertido, o Ás de Ouros pode indicar uma oportunidade perdida ou uma má decisão financeira. Você pode ter focado tanto em ganhos de curto prazo que perdeu de vista o quadro geral. Isso também pode ser um aviso contra a ganância ou a falta de planejamento. É um sinal de que você precisa ser mais cuidadoso com seus recursos e pensar mais a longo prazo. Não se desanime com um contratempo. Haverá outras oportunidades, mas você precisa estar preparado para aproveitá-las."
    },
    {
        name: "Dois de Ouros",
        meaning_up: "Equilíbrio, priorização, adaptação à mudança, gerenciamento do tempo",
        meaning_rev: "Sobrecarregado, desorganizado, desordem financeira",
        desc: "O Dois de Ouros é sobre conciliar múltiplas prioridades e se adaptar aos altos e baixos da vida. É uma carta de equilíbrio e flexibilidade.",
        interpretation_up: "Você está fazendo um trabalho magistral de conciliar suas muitas responsabilidades. Esta carta é um sinal de sua capacidade de se adaptar à mudança e de manter todas as bolas no ar. Você está sendo flexível e encontrando uma maneira de equilibrar seu trabalho, suas finanças e sua vida pessoal. Este é um momento para um bom gerenciamento do tempo e para ser capaz de ir com o fluxo. Você pode estar ocupado, mas está lidando com tudo com uma sensação de facilidade e graça. Continue o bom trabalho.",
        interpretation_rev: "Invertido, o Dois de Ouros pode indicar que você está se sentindo sobrecarregado e desorganizado. Você pode estar tentando fazer demais e está deixando a bola cair. Isso pode levar a uma sensação de estar fora de controle e a uma desordem financeira. É um sinal de que você precisa simplificar sua vida e aprender a priorizar. O que é verdadeiramente importante? É hora de deixar ir o que não é essencial e focar em uma coisa de cada vez."
    },
    {
        name: "Três de Ouros",
        meaning_up: "Trabalho em equipe, colaboração, aprendizado, implementação",
        meaning_rev: "Desarmonia, desalinhamento, trabalhar sozinho, falta de colaboração",
        desc: "O Três de Ouros é uma carta de trabalho em equipe e colaboração. Representa um projeto bem-sucedido que é o resultado de diferentes pessoas unindo suas habilidades únicas.",
        interpretation_up: "Suas habilidades únicas são uma contribuição valiosa para um projeto maior. Esta carta é um sinal de trabalho em equipe bem-sucedido e uma colaboração onde todos estão desempenhando seu papel. Você está aprendendo com os outros, e eles estão aprendendo com você. Este é um momento para construir algo de alta qualidade, algo que resistirá ao teste do tempo. Seu trabalho duro e dedicação estão sendo reconhecidos, e você está no caminho certo para criar algo verdadeiramente significativo. Juntos, vocês são mais fortes.",
        interpretation_rev: "Quando invertido, o Três de Ouros pode indicar falta de trabalho em equipe ou uma sensação de desarmonia dentro de um grupo. Você pode estar lutando para trabalhar com os outros, ou pode sentir que suas contribuições não estão sendo valorizadas. Isso também pode ser um sinal de que você está tentando fazer tudo sozinho, quando teria mais sucesso se pedisse ajuda. É um sinal de que você precisa encontrar uma maneira de melhorar sua comunicação e trabalhar de forma mais colaborativa com os outros."
    },
    {
        name: "Quatro de Ouros",
        meaning_up: "Economizar dinheiro, segurança, controle, conservação, mentalidade de escassez",
        meaning_rev: "Gastos excessivos, ganância, autoproteção, generosidade",
        desc: "O Quatro de Ouros é uma carta de segurança e controle. Representa um desejo de se agarrar ao que você tem, seja dinheiro, posses ou poder.",
        interpretation_up: "Você trabalhou duro para alcançar um nível de segurança, e agora está focado em protegê-lo. Esta carta é um sinal de ser conservador com seus recursos e de construir uma base sólida para o seu futuro. Embora seja sábio ser prudente, tenha cuidado para não se apegar demais a seus bens materiais. Há uma linha tênue entre ser financeiramente responsável e ter uma mentalidade de escassez. É hora de encontrar um equilíbrio entre economizar para o futuro e aproveitar o presente.",
        interpretation_rev: "Quando invertido, o Quatro de Ouros pode ser um aviso contra a ganância ou o medo da perda que o está levando a ser excessivamente controlador. Você pode ter tanto medo de perder o que tem que não está permitindo que nenhuma nova energia entre em sua vida. Isso também pode ser um sinal de que você está pronto para abandonar seu medo e ser mais generoso com seus recursos. É um momento de liberar seu forte controle e de confiar na abundância do universo."
    },
    {
        name: "Cinco de Ouros",
        meaning_up: "Perda financeira, pobreza, isolamento, preocupação, insegurança",
        meaning_rev: "Recuperação de perda financeira, pobreza espiritual",
        desc: "O Cinco de Ouros é uma carta de tempos difíceis. Representa perda financeira, pobreza e uma sensação de ser deixado de fora no frio.",
        interpretation_up: "Você está passando por um momento difícil e sentindo uma sensação de perda e isolamento. Esta carta é um sinal de dificuldade financeira, e pode ser uma experiência solitária e assustadora. É importante lembrar que você não está sozinho. Há ajuda disponível, mas você deve estar disposto a pedi-la. A igreja ao fundo da carta representa um santuário, um lugar de esperança. Não seja orgulhoso demais para procurar apoio. Esta é uma situação temporária, e você vai superá-la.",
        interpretation_rev: "Quando invertido, o Cinco de Ouros é um sinal de que você está começando a se recuperar de um período de perda financeira. Você está encontrando novas fontes de renda, ou está aprendendo a viver com menos. Isso também pode indicar um foco na pobreza espiritual. Você pode ter todos os bens materiais que poderia desejar, mas está sentindo um profundo vazio por dentro. É um sinal de que você precisa focar no que realmente nutre sua alma, não apenas sua conta bancária."
    },
    {
        name: "Seis de Ouros",
        meaning_up: "Generosidade, caridade, dar e receber, compartilhar riqueza",
        meaning_rev: "Autocuidado, dívidas não pagas, caridade unilateral",
        desc: "O Seis de Ouros é uma carta de generosidade e equilíbrio. Representa o ato de dar e receber, e a importância de compartilhar a própria riqueza.",
        interpretation_up: "Você está em posição de ser generoso, e está compartilhando sua abundância com os outros. Esta carta é um sinal de um fluxo saudável de energia, onde você está tanto dando quanto recebendo em igual medida. Pode ser um momento de caridade financeira, ou pode ser sobre compartilhar seu tempo, seu conhecimento ou sua compaixão. Você está criando um ciclo positivo de abundância, e quanto mais você der, mais receberá. É uma coisa linda.",
        interpretation_rev: "Quando invertido, o Seis de Ouros pode ser um aviso contra um relacionamento unilateral. Você pode estar dando demais e não recebendo nada em troca, ou pode estar se aproveitando da generosidade de outra pessoa. Isso também pode ser um sinal de dívidas não pagas ou uma sensação de ser subestimado. É um chamado para restaurar o equilíbrio em seus relacionamentos e garantir que o dar e receber seja igual."
    },
    {
        name: "Sete de Ouros",
        meaning_up: "Visão de longo prazo, resultados sustentáveis, perseverança, investimento",
        meaning_rev: "Falta de visão de longo prazo, sucesso ou recompensa limitados",
        desc: "O Sete de Ouros é uma carta de paciência e planejamento de longo prazo. Você plantou suas sementes e agora está esperando que elas cresçam.",
        interpretation_up: "Você tem trabalhado duro, e agora é hora de fazer uma pausa e avaliar seu progresso. Esta carta é um sinal de um investimento de longo prazo, e você está começando a ver os primeiros frutos do seu trabalho. Este não é um momento para uma vitória rápida, mas para um sucesso sustentável e duradouro. Seja paciente e continue a nutrir seus projetos. Você está no caminho certo, e seu trabalho duro valerá a pena a longo prazo. É hora de parar um momento para apreciar o quão longe você chegou.",
        interpretation_rev: "Quando invertido, o Sete de Ouros pode indicar uma sensação de frustração de que seu trabalho duro não está valendo a pena. Você pode estar tão focado em resultados de curto prazo que não está vendo o quadro geral. Isso também pode ser um sinal de um mau investimento ou de um projeto que não é sustentável. É um chamado para reavaliar seus objetivos de longo prazo e garantir que você está investindo seu tempo e energia nas coisas certas."
    },
    {
        name: "Oito de Ouros",
        meaning_up: "Aprendizado, artesanato, desenvolvimento de habilidades, maestria",
        meaning_rev: "Perfeccionismo, atividade mal direcionada, repetitiva, sem paixão",
        desc: "O Oito de Ouros é uma carta de dedicação e maestria. Representa um tempo de aprimorar suas habilidades e ter orgulho de seu trabalho.",
        interpretation_up: "Você está totalmente engajado em seu trabalho e está no caminho da maestria. Esta carta é um sinal de um profundo compromisso com sua arte e um desejo de melhorar suas habilidades. Você está prestando atenção aos detalhes e tem grande orgulho da qualidade de seu trabalho. Este é um tempo de esforço focado e uma dedicação à excelência. Seu trabalho duro e diligência levarão a um grande sentimento de realização e a um alto nível de habilidade. Continue o ótimo trabalho.",
        interpretation_rev: "Quando invertido, o Oito de Ouros pode ser um aviso contra o perfeccionismo. Você pode estar tão focado em acertar cada pequeno detalhe que não está fazendo nenhum progresso. Isso também pode indicar uma sensação de estar preso em um trabalho repetitivo e insatisfatório. Você pode estar apenas cumprindo tabela, mas seu coração não está nisso. É um sinal de que você precisa encontrar uma maneira de trazer mais paixão e criatividade para o seu trabalho."
    },
    {
        name: "Nove de Ouros",
        meaning_up: "Abundância, luxo, autossuficiência, independência financeira",
        meaning_rev: "Autoestima, excesso de trabalho, correria, dependência financeira",
        desc: "O Nove de Ouros é uma carta de luxo, abundância e independência financeira. Você trabalhou duro para criar uma vida de conforto e segurança, e agora está desfrutando dos frutos do seu trabalho.",
        interpretation_up: "Você criou uma vida de abundância e independência, e está aproveitando ao máximo. Esta carta é um sinal de uma recompensa merecida por todo o seu trabalho duro. Você está financeiramente seguro e tem a liberdade de desfrutar das coisas boas da vida. Este é um tempo de luxo, autossuficiência e uma profunda apreciação por tudo o que você tem. Você criou seu próprio paraíso, e tem todo o direito de se orgulhar disso.",
        interpretation_rev: "Quando invertido, o Nove de Ouros pode indicar que sua autoestima está muito ligada ao seu sucesso financeiro. Você pode estar trabalhando tanto que não está tirando tempo para aproveitar a vida. Isso também pode ser um sinal de dependência financeira de outros ou uma sensação de estar preso por seus próprios bens. É um chamado para encontrar uma forma mais autêntica e sustentável de abundância, uma que não seja apenas sobre dinheiro, mas sobre um profundo senso de autoestima e paz interior."
    },
    {
        name: "Dez de Ouros",
        meaning_up: "Riqueza, família, herança, legado, segurança a longo prazo",
        meaning_rev: "Fracasso financeiro, solidão, perda",
        desc: "O Dez de Ouros representa o máximo em sucesso e segurança material. É uma carta de riqueza familiar, legado e uma base duradoura para as gerações futuras.",
        interpretation_up: "Você construiu um legado duradouro de riqueza e segurança. Esta carta é um sinal de um profundo senso de conexão familiar e um compromisso de prover para as gerações futuras. Você alcançou um alto nível de sucesso material e está compartilhando sua abundância com seus entes queridos. Este é um tempo de estabilidade, tradição e uma profunda apreciação por suas raízes. Você criou uma base sólida que resistirá ao teste do tempo.",
        interpretation_rev: "Quando invertido, o Dez de Ouros pode indicar uma perda financeira ou uma sensação de estar desconectado de sua família. Você pode estar lutando com uma sensação de instabilidade ou um medo de perder o que tem. Isso também pode ser um aviso contra colocar muita ênfase na riqueza material em detrimento de seus relacionamentos. É um sinal de que você precisa focar no que realmente importa: o amor e o apoio de sua família."
    },
    {
        name: "Pajem de Ouros",
        meaning_up: "Nova oportunidade, manifestação, ambição, diligência",
        meaning_rev: "Falta de progresso, procrastinação, aprender com o fracasso",
        desc: "O Pajem de Ouros é um mensageiro de novas oportunidades no mundo material. Ele é um estudante diligente e ambicioso, ansioso para aprender e tornar seus sonhos realidade.",
        interpretation_up: "Uma nova e emocionante oportunidade está vindo em sua direção. Esta carta é um sinal de um novo emprego, um novo projeto ou uma nova maneira de ganhar dinheiro. Você está se sentindo ambicioso e pronto para se esforçar para tornar seus sonhos realidade. Este é um momento para aprender, para ser diligente e para se manter com os pés no chão. O universo está lhe oferecendo a chance de construir algo real e duradouro. Aproveite esta oportunidade e prepare-se para manifestar seus objetivos.",
        interpretation_rev: "Quando invertido, o Pajem de Ouros pode indicar falta de progresso ou uma tendência a procrastinar. Você pode ter uma ótima ideia, mas não está tomando as medidas práticas para que ela aconteça. Isso também pode ser um sinal de um contratempo ou um fracasso do qual você pode aprender. É um chamado para ser mais diligente e focar nos detalhes práticos. Não tenha medo de começar pequeno. Todo grande sucesso começa com um único passo."
    },
    {
        name: "Cavaleiro de Ouros",
        meaning_up: "Trabalho duro, rotina, produtividade, conservadorismo",
        meaning_rev: "Autodisciplina, tédio, sentir-se 'preso', perfeccionismo",
        desc: "O Cavaleiro de Ouros é uma figura de trabalho duro e dedicação. Ele é um trabalhador confiável e metódico que está comprometido em levar seus projetos até o fim.",
        interpretation_up: "Você é um mestre da rotina e um modelo de produtividade. Esta carta é um sinal de seu compromisso com seu trabalho e sua capacidade de seguir um plano. Você não está procurando atalhos; está disposto a se esforçar para fazer o trabalho direito. Este é um momento de diligência, responsabilidade e uma abordagem metódica para seus objetivos. Sua paciência e persistência valerão a pena a longo prazo. Você é uma força confiável e digna de confiança.",
        interpretation_rev: "Quando invertido, o Cavaleiro de Ouros pode indicar uma sensação de estar preso em uma rotina. Você pode estar tão focado em sua rotina que perdeu o senso de aventura. Isso também pode ser um aviso contra o perfeccionismo ou o medo da mudança. É um sinal de que você precisa agitar as coisas e encontrar uma maneira de trazer mais emoção para sua vida. Não há problema em ser confiável, mas não deixe que isso se transforme em tédio."
    },
    {
        name: "Rainha de Ouros",
        meaning_up: "Nutritiva, prática, provedora, financeiramente segura",
        meaning_rev: "Independência financeira, autocuidado, conflito trabalho-casa",
        desc: "A Rainha de Ouros é uma provedora nutritiva e prática. Ela é uma mestra do lar e uma empresária experiente, que cria um ambiente caloroso e seguro para seus entes queridos.",
        interpretation_up: "Você é uma presença calorosa e nutritiva, e tem o dom de criar uma vida de conforto e segurança. Esta carta é um sinal de sua natureza prática e sua capacidade de prover para si mesma e para os outros. Você é uma gerente experiente de seus recursos e não tem medo de se esforçar para criar uma vida bela e abundante. Este é um momento para aninhar-se, para desfrutar dos prazeres simples do lar e para compartilhar sua abundância com aqueles que você ama.",
        interpretation_rev: "Quando invertida, a Rainha de Ouros pode indicar um conflito entre seu trabalho e sua vida doméstica. Você pode estar tão focada em sua carreira que está negligenciando suas próprias necessidades ou as necessidades de sua família. Isso também pode ser um sinal de que você precisa focar em sua própria independência financeira e autocuidado. É um chamado para encontrar um melhor equilíbrio entre suas responsabilidades para com os outros e sua responsabilidade para consigo mesma."
    },
    {
        name: "Rei de Ouros",
        meaning_up: "Riqueza, negócios, liderança, segurança, disciplina",
        meaning_rev: "Inapto financeiramente, obcecado por riqueza, teimoso",
        desc: "O Rei de Ouros é um mestre do mundo material. Ele é um líder poderoso e bem-sucedido que criou um reino de riqueza e abundância através de seu trabalho duro e disciplina.",
        interpretation_up: "Você alcançou o auge do sucesso material. Esta carta é um sinal de seu domínio do mundo financeiro e sua capacidade de criar uma vida de abundância e segurança. Você é um líder poderoso e respeitado, e não tem medo de correr riscos calculados para aumentar sua riqueza. Este é um momento para desfrutar dos frutos do seu trabalho e compartilhar seu sucesso com os outros. Você construiu um império, e é um testemunho de seu trabalho duro, sua disciplina e seu bom senso.",
        interpretation_rev: "Quando invertido, o Rei de Ouros pode ser um aviso contra a obsessão por riqueza e status. Você pode estar tão focado em ganhar dinheiro que perdeu de vista o que é verdadeiramente importante. Isso também pode indicar uma má decisão financeira ou uma recusa teimosa em se adaptar às circunstâncias em mudança. É um sinal de que você precisa encontrar uma definição mais equilibrada e gratificante de sucesso, uma que não seja apenas sobre o resultado final."
    }
  ],
};