const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3001

const cards = [
    {
        name: 'Charzard',
        level: 100,
        rarity: 50,
        skills: [
            {
                name: 'blaster',
                unlocked: false,
            },
            {
                name: 'brainer',
                unlocked: false,
            },
            {
                name: 'torpedo',
                unlocked: true,
            },
            {
                name: 'waterscrew',
                unlocked: true,
            },
            {
                name: 'topclear',
                unlocked: true,
            }
        ]
    },
    {
        name: 'PickaChu',
        level: 1000,
        rarity: 100,
        skills: [
            {
                name: 'blaster',
                unlocked: false,
            },
            {
                name: 'brainer',
                unlocked: false,
            },
            {
                name: 'torpedo',
                unlocked: true,
            },
            {
                name: 'waterscrew',
                unlocked: true,
            },
            {
                name: 'topclear',
                unlocked: true,
            }
        ]
    },
    {
        name: 'Snailer',
        level: 300,
        rarity: 50,
        skills: [
            {
                name: 'blaster',
                unlocked: false,
            },
            {
                name: 'brainer',
                unlocked: false,
            },
            {
                name: 'torpedo',
                unlocked: true,
            },
            {
                name: 'waterscrew',
                unlocked: true,
            },
            {
                name: 'topclear',
                unlocked: true,
            }
        ]
    },
    {
        name: 'Tortoise',
        level: 500,
        rarity: 50,
        skills: [
            {
                name: 'blaster',
                unlocked: false,
            },
            {
                name: 'brainer',
                unlocked: false,
            },
            {
                name: 'torpedo',
                unlocked: true,
            },
            {
                name: 'waterscrew',
                unlocked: true,
            },
            {
                name: 'topclear',
                unlocked: true,
            }
        ]
    }
]

function getCard(){
    const random = Math.floor(Math.random() * cards.length)
    return cards[random]
}

app.use(cors())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api', (req, res) => {
    const card = getCard();
    const cardObj = {
        card: card,
        is_good: card.level < 100 ? false : true,
    }
    res.json(cardObj)
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port ${PORT}`)
})