import fire from "../../Utility/Components/FirebaseSetup";

export const askForPermissionToReceiveNotifications = async () => {
    try {
        const messaging = fire.messaging();
        await messaging.requestPermission();
        const token = await messaging.getToken();
        console.log('token do usuário:', token);

        return token;
    } catch(error) {
        console.log(error);
    }
}