// import keys from 'ignore' keys file for privacy
import { eventbriteApiKey, ticketmasterApiKey } from './keys.js';

document.addEventListener('DOMContentLoaded', function() {
    const loginPage = document.getElementById("login-page");
    const eventSearchPage = document.getElementById("event-search-page");
    const eventResultsDiv = document.getElementById('search-results');
  
    const mockUser = {
      username: "testUser",
      password: "testPassword"
    };

    window.login = function() {
      const usernameInput = document.getElementById("username");
      const passwordInput = document.getElementById("password");
      const errorMessage = document.getElementById("login-error");
      
      if (
        usernameInput.value === mockUser.username &&
        passwordInput.value === mockUser.password
      ) {
        loginPage.style.display = "none";
        eventSearchPage.style.display = "block";
        errorMessage.style.display = "none";
  
  
      } else {
        errorMessage.style.display = "block";
      }
    };
  
  
  });
  