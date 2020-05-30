export const DECK_STORAGE_KEY = 'Deck'

let decks = [{
    "id": generateUID(),
    "deckTitle": "Deck 1",
    "cards": [
      {
          "id": generateUID(),
          'question': 'Hidfsghjj',
          'answer': 'sdfghjk'
      },
      {
        "id": generateUID(),
        'question': 'Hidfsghjj',
        'answer': 'sdfghjk'
    }
    ]
  }, {
    "id": generateUID(),
    "deckTitle": "Deck 2",
    "cards": [
        {
            "id": generateUID(),
            'question': 'Hidfsghjj',
            'answer': 'sdfghjk'
        },
        {
          "id": generateUID(),
          'question': 'Hidfsghjj',
          'answer': 'sdfghjk'
      }
      ]
  }, {
    "id": generateUID(),
    "deckTitle": "Deck 3",
    "cards": [
        {
            "id": generateUID(),
            'question': 'Hidfsghjj',
            'answer': 'sdfghjk'
        },
        {
          "id": generateUID(),
          'question': 'Hidfsghjj',
          'answer': 'sdfghjk'
      }
      ]
  }, {
    "id": generateUID(),
    "deckTitle": "Deck 4",
    "cards": [
        {
            "id": generateUID(),
            'question': 'Hidfsghjj',
            'answer': 'sdfghjk'
        },
        {
          "id": generateUID(),
          'question': 'Hidfsghjj',
          'answer': 'sdfghjk'
      }
      ]
  }, { 
    "id": generateUID(),
    "deckTitle": "Deck 5",
    "cards": [
        { 
            "id": generateUID(),
            'question': 'Hidfsghjj',
            'answer': 'sdfghjk'
        },
        {
          "id": generateUID(),
          'question': 'Hidfsghjj',
          'answer': 'sdfghjk'
      }
      ]
  },
  {
    "id": generateUID(),
    "deckTitle": "Deck 1",
    "cards": [
      {
          "id": generateUID(),
          'question': 'Hidfsghjj',
          'answer': 'sdfghjk'
      },
      {
        "id": generateUID(),
        'question': 'Hidfsghjj',
        'answer': 'sdfghjk'
    }
    ]
  }, {
    "id": generateUID(),
    "deckTitle": "Deck 2",
    "cards": [
        {
            "id": generateUID(),
            'question': 'Hidfsghjj',
            'answer': 'sdfghjk'
        },
        {
          "id": generateUID(),
          'question': 'Hidfsghjj',
          'answer': 'sdfghjk'
      }
      ]
  }, {
    "id": generateUID(),
    "deckTitle": "Deck 3",
    "cards": [
        {
            "id": generateUID(),
            'question': 'Hidfsghjj',
            'answer': 'sdfghjk'
        },
        {
          "id": generateUID(),
          'question': 'Hidfsghjj',
          'answer': 'sdfghjk'
      }
      ]
  }, {
    "id": generateUID(),
    "deckTitle": "Deck 4",
    "cards": [
        {
            "id": generateUID(),
            'question': 'Hidfsghjj',
            'answer': 'sdfghjk'
        },
        {
          "id": generateUID(),
          'question': 'Hidfsghjj',
          'answer': 'sdfghjk'
      }
      ]
  }, { 
    "id": generateUID(),
    "deckTitle": "Deck 5",
    "cards": [
        { 
            "id": generateUID(),
            'question': 'Hidfsghjj',
            'answer': 'sdfghjk'
        },
        {
          "id": generateUID(),
          'question': 'Hidfsghjj',
          'answer': 'sdfghjk'
      }
      ]
  }]



  export function _getDecks () {
    return new Promise((res, rej) => {
      setTimeout(() => res(decks), 1000)
    })
  }



  export function generateUID () {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
  }