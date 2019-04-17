const functions = require('firebase-functions');

const admin = require ('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

const createNotification = (notification => {
    return admin.firestore().collection('notification').add(notification).then(doc => console.log('notification added', doc))
});

exports.projectCreated = functions.firestore.document('projects/{projectId}').onCreate(doc => {
    const project = doc.data();
    const notification = {
        content: 'Added a new project',
        user: `${project.authorFirstName} ${project.authorLastName}`,  //Putting two things in a string together
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);
});

exports.userJoined = functions.auth.user().oncCeate(user => {
    return admin.firestore().collection('users').doc(user.uid).get().then(doc => {
        const newUser = doc.data();
        const notification = {
            content: 'Joined the blog',
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
    })
});