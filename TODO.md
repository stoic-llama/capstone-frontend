## Updated 10/8/2024 

1. ~~Finish Log Out page~~

2. ~~Finish Password Reset page~~

3. Finish Like / Dislike logic (Frontend, Backend)
    - From frontend it sends store id, product id, user id, like (Boolean), dislike (Boolean)
    - Based on that we can apply validation logic for the scenarios
        - So whenever user clicks thumbs up or down it will send a post request with those values
        - After user clicks like or dislike page will reload with updated stores and store items
        - If the update was successful refresh as normal, else if update failed then frontend might display a failure toaster and still refresh

4. **Stretch Goal** Finish the web scraping logic for Target website and loading into database

