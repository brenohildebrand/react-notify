/*
    react-notify
  
    ----------------------------------------------------------------------------
    IMPORTANT: THIS LIBRARY IS NOT PUBLISHED ON ANY PACKAGE MANAGER, SO YOU NEED
    TO CLONE THIS FILE BY YOURSELF.
    ----------------------------------------------------------------------------
    
    Author: Breno Hildebrand dos Santos
    breno.h1ldebr4nd@gmail.com

    Contributors: ---

    Repository: https://github.com/brenoh1ldebr4nd/react-notify

    About
    -----
    react-notify is a lightweight library to help developers handle
    notifications easily.
    
    How to use
    ----------
    Include the <Notify> component in your app and wrap everything in the
    <NotifyProvider>. Access the notify functions using the <NotifyContext>.

    For more information, there's a README on GitHub.
*/


// Imports
//
// All imports comes from the react library.
import { createContext, useContext, useState } from "react"


// NotifyContext
//
//
const NotifyContext = createContext({});

// NotifyProvider
//
//
const NotifyProvider = ({ children }) => {

    const [notifications, setNotifications] = useState([]);

    const notify = (notification, delay) => {
        
        // Generate ID
        const currentID = Date.now();
        
        // Assign ID to current notification
        notification['ID'] = currentID;

        // Include current notification in notifications
        setNotifications(notifications.concat(notification))

        // Remove current notification from notifications after delay || 3000
        setTimeout(() => {
            setNotifications((prevState) => {
                return prevState.filter(notification => (
                    notification['ID'] !== currentID
                ))
            })
        }, delay || 3000)

    }

    return (
        <NotifyContext.Provider value={{
            notifications,
            notify
        }}>
            {children}
        </NotifyContext.Provider>
    )

}

// Notify
//
// A react component to take care of the notifications.
// It's a notification-block.
const Notify = () => {
    const { notifications } = useContext(NotifyContext);

    return (
        <div>
            {notifications.map(({ID, message, type}) => {
                return (
                    <div 
                        key={ID}
                        className={`notify-${type}`}
                    >
                        {message}
                    </div>
                )
            })}
        </div>
    )
}

// Exports
//
//
export default Notify
export { NotifyContext, NotifyProvider }