var host = window.location.hostname;
var socket = io.connect("http://" + host + ":3000");

var items = [
    {
        text: 'Amanda wordt woest',
        id: 1
    },
    {
        text: 'Amanda snauwt Jon af',
        id: 2
    },
    {
        text: 'Amanda beledigd iets of iemand',
        id: 3
    },
    {
        text: 'Sam smith meezingen',
        id: 4
    },
    {
        text: 'Harm niest',
        id: 5
    },
    {
        text: 'Skippybal wordt geschopt tussen Boyd & Antwan',
        id: 6
    },
    {
        text: 'Boyd is te laat',
        id: 7
    },
    {
        text: 'Antwan zegt: "Ik heb veel … maar dit …"',
        id: 8
    },
    {
        text: 'Jon doet tof',
        id: 9
    },
    {
        text: 'Jon is woest',
        id: 10
    },
    {
        text: '"Trek in een bammetje" om 12:28',
        id: 11
    },
    {
        text: 'Ruud krijgt punthoofd van onze muziek',
        id: 12
    },
    {
        text: 'Ruud SOLR/BackBone verhalen',
        id: 13
    },
    {
        text: 'Ruud is klaar met mongo/phalcon',
        id: 14
    },
    {
        text: '"Sorry dat ik besta"',
        id: 15
    },
    {
        text: 'Smerige praat tijdens de pauze',
        id: 16
    },
    {
        text: 'De "waarom eigenlijk?" vraag',
        id: 17
    },
    {
        text: 'omnomnom zeggen',
        id: 18
    },
    {
        text: 'Iets met 1000',
        id: 19
    },
    {
        text: 'Iemand wordt uitgemaakt voor smeerpoets',
        id: 20
    },
    {
        text: 'Iemand wordt uitgemaakt voor player',
        id: 21
    },
    {
        text: 'Onderonsje over smeerpoetsenapp',
        id: 22
    },
    {
        text: 'De Bruin heeft te maken met amateurs en hobbyisten',
        id: 23
    },
    {
        text: 'Commit op de verkeerde branch',
        id: 24
    },
    {
        text: 'Antwan is woest op het leven',
        id: 25
    },
    {
        text: 'Bergen op Zoom wordt genoemd / belachelijk gemaakt',
        id: 26
    },
    {
        text: 'Schiedam wordt genoemd / belachelijk gemaakt',
        id: 27
    },
    {
        text: 'Iemand is ‘verward’',
        id: 28
    },
    {
        text: 'Stefan is woest op zijn laptop',
        id: 29
    },
    {
        text: 'Telefoon wordt op iemands bureau gelegd',
        id: 30
    },
    {
        text: 'Jon, wanneer ga je trouwen?',
        id: 31
    },
    {
        text: '"Dankje!"',
        id: 32
    },
    {
        text: 'Antwan maakt seksueel opmerking naar/over vrouwen',
        id: 33
    },
    {
        text: 'Iets over "het leven"',
        id: 34
    },
    {
        text: 'Iemand vraagt of je ‘weleens zonder tandjes hebt gelachen’ o.i.d.',
        id: 35
    }
];

//@TODO move this code
Notification.requestPermission();

socket.on('status', function (data)
{
    console.log('status', data);
    var notification = new Notification("Bingo update: " + data);
});
