import { AsyncStorage } from 'react-native'
import { Notifications, Permission } from 'expo'

const NOTIFICATION_KEY = 'Deck:notifications'

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

  export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATION_KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
  }

  function createNotification(){
    return {
      title: 'Run through the Deck!',
      body: 'You did not run through your deck today',
      ios:{
        sound: true
      },
      android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true
      }
    }
  }

  export function setLocalNotification () {
    AsyncStorage.getItem(NOTIFICATION_KEY)
      .then(JSON.parse)
      .then((data) => {
        if (data === null) {
          Permissions.askAsync(Permissions.NOTIFICATIONS)
            .then(({ status }) => {
              if (status === 'granted') {
                Notifications.cancelAllScheduledNotificationsAsync()
  
                let tomorrow = new Date()
                tomorrow.setDate(tomorrow.getDate() + 1)
                tomorrow.setHours(20)
                tomorrow.setMinutes(0)
  
                Notifications.scheduleLocalNotificationAsync(
                  createNotification(),
                  {
                    time: tomorrow,
                    repeat: 'day',
                  }
                )
  
                AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true))
              }
            })
        }
      })
  }