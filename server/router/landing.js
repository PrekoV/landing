var express = require('express');
const router = express.Router()
const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const uploads = multer({ storage })

const url = "http://localhost:8080/"

const data = {
    slider: {
        contacts: {
            email: "info@yourdemo.com",
            tel: "+91 123-000-1234"
        },
        menu: ["DOMAIN", "PRODUCTS", "SSL CERTIFICATE", "AFFILIATES", "EMAIL", "ABOUT US"],
        wallpaper: `${url}slider1.jpg`,
        logo: `${url}logo.png`
    },
    domains: [
        { name: ".com", price: 8.99 },
        { name: ".in", price: 10.99 },
        { name: ".ogr", price: 12.99 },
        { name: ".biz", price: 13.99 },
    ],
    hostingSolutions: [
        {
            icon: `${url}domain-search.png`,
            title: "Domain Search",
            discription: "More recently with desktop publishing software like Aldus PageMaker including versions."
        },
        {
            icon: `${url}shared-hosting.png`,
            title: "Shared Hosting",
            discription: "More recently with desktop publishing software like Aldus PageMaker including versions."
        },
        {
            icon: `${url}reseller-hosting.png`,
            title: "Reseller Hosting",
            discription: "More recently with desktop publishing software like Aldus PageMaker including versions."
        },
        {
            icon: `${url}dedicated-server.png`,
            title: "Dedicated Server",
            discription: "More recently with desktop publishing software like Aldus PageMaker including versions."
        },
        {
            icon: `${url}vps-hosting.png`,
            title: "VPS Hosting",
            discription: "More recently with desktop publishing software like Aldus PageMaker including versions."
        },
        {
            icon: `${url}ssl-certificate.png`,
            title: "SSL Certificate",
            discription: "More recently with desktop publishing software like Aldus PageMaker including versions."
        },
        {
            icon: `${url}domain-transfer.png`,
            title: "Domain Transfer",
            discription: "More recently with desktop publishing software like Aldus PageMaker including versions."
        },
        {
            icon: `${url}email-hosting.png`,
            title: "Email Hosting",
            discription: "More recently with desktop publishing software like Aldus PageMaker including versions."
        }
    ],
    getStarted: {
        url: "http://google.com",
        wallpaper: `${url}ready-bg.jpg`
    },
    signingUp: [
        {
            icon: "☘",
            title: "CHOOSE A PLAN",
            discription: "Lorem Ipsum as their model and search will uncover many versions over the years.Lorem Ipsum as their model and search many versions over the years."
        },
        {
            icon: "🟔",
            title: "CHOOSE LOCATION",
            discription: "Lorem Ipsum as their model and search will uncover many versions over the years.Lorem Ipsum as their model and search many versions over the years."
        },
        {
            icon: "❀",
            title: "RECEIVE LOGIN DETAILS",
            discription: "Lorem Ipsum as their model and search will uncover many versions over the years.Lorem Ipsum as their model and search many versions over the years."
        },
    ],
    prices: [
        {
            title: "SHARED",
            inMonth: "18.00",
            instructions: ["Concurrent Domain", "Theme Updates", "500 GB Disk Space", "100 Databases List", "Free Domain Registration", "1 Hosting Space"]
        },
        {
            title: "RESELLER",
            inMonth: "150.00",
            instructions: ["Concurrent Domain", "Theme Updates", "500 GB Disk Space", "100 Databases List", "Free Domain Registration", "1 Hosting Space"]
        },
        {
            title: "DEDICATED",
            inMonth: "1200.00",
            instructions: ["Concurrent Domain", "Theme Updates", "500 GB Disk Space", "100 Databases List", "Free Domain Registration", "1 Hosting Space"]
        },
        {
            title: "VPS",
            inMonth: "1200.00",
            instructions: ["Concurrent Domain", "Theme Updates", "500 GB Disk Space", "100 Databases List", "Free Domain Registration", "1 Hosting Space"]
        },
    ],
    chooseWebHosting: {},
    hostingIcons: {},
    feedback: {},
    subscribeOnNews: [],
    preFooter: {},
    footer: {}
}

router.get('/data', function (req, res) {
    res.status(200).send(data)
    console.log('get', data.subscribeOnNews)
})

router.post('/download', uploads.single('file'), function (req, res) {
    console.log('req file', req.file)
    //res.send({ message: 'OK' })
    let file = req.file
    let dataFile = {
        icon: `${url}uploads/${file.filename}`,
        title: "Domain Search",
        discription: "More recently with desktop publishing software like Aldus PageMaker including versions."
    }
    data.hostingSolutions.push(dataFile)
    res.status(200).send(data.hostingSolutions)
    //console.log('post', data.subscribeOnNews)
})

// router.get('/data/menu', function (req, res) {
//     res.status(200).send(data.menu)
// })

// router.get('/data/contacts', function (req, res) {
//     res.status(200).send(data.contacts)
// })

module.exports = router