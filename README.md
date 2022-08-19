# Time, number of feature, and what the user wants

## Class 02 Lab

Number and name of feature: Feature **number 1**:  Display images
Estimate of time needed to complete: 2-3 hours
As a user, I want to view the images on the page so that I can browse the photo collection.
Start time: 5:40 Pm
Finish time: 7:28 Pm
Actual time needed to complete: 1 hours 40 minutes

Number and name of feature: Feature **number 2**:  Allow users to vote for their favorite beast
Estimate of time needed to complete: 3 hours
As a user, I want to be able to interact with the site and pick my favorite beast.
Start time: 7:40 PM
Finish time: 9:30 Pm
Actual time needed to complete: 2 hours

Number and name of feature: Feature **number 3**:  Bootstrap
Estimate of time needed to complete: 3 hours
As a user, I want to see a visually pleasing application that is also reponsive when I view this application on different screen sizes.
Start time: 9:40 Pm
Finish time: 10:08 Pm
Actual time needed to complete: 28 minutes

## Class 03 Lab

Number and name of feature: Feature **number 1**:  Display a Modal

Estimate of time needed to complete: 2-3 hours

As a user, I want the image to be displayed in a larger size and with the description shown so that I can view the details of a single image.

Start time: 6:30 Pm
Finish time:  Pm

Actual time needed to complete: 

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## Lab Class 01 Help From Tim Traylor

Number and name of feature: Feature **number 1**:  Display images
Estimate of time needed to complete: 2-3 hours
As a user, I want to view the images on the page so that I can browse the photo collection.
Start time: 5:40 Pm
Finish time: 7:28 Pm
Actual time needed to complete: 1 hours 40 minutes

Number and name of feature: Feature **number 2**:  Allow users to vote for their favorite beast
Estimate of time needed to complete: 3 hours
As a user, I want to be able to interact with the site and pick my favorite beast.
Start time: 7:40 PM
Finish time: 9:30 Pm
Actual time needed to complete: 2 hours

Number and name of feature: Feature **number 3**:  Bootstrap
Estimate of time needed to complete: 3 hours
As a user, I want to see a visually pleasing application that is also reponsive when I view this application on different screen sizes.
Start time: 9:40 Pm
Finish time: 10:08 Pm
Actual time needed to complete: 28 minutes

### Lab 03 Requirements to finish

First off, import the data.json file into your App component and send that data into the Main component, let's move it out Main ( and selectedBeast) and into App

**on a side note, also make sure to capitalize the files that you're exporting components from. ie selectedBeast should be SelectedBeast. On another note, don't forget to export your SelectedBeast component. (DONE)

Next, send a function into your Main component that allows the user to update state in the App.

Inside of selectedBeast, move your current 'show' state and createOption(), handleClose() and handleOpen() methods into App as well to then be passed along.

Next, make sure to include your SelectedBeast component in App

After doing this, in order tyo render a Modal for each selected beast, you will probably need to create some state and then pass that into your handleOpen() method, so that when an image is clicked, it knows which selected beast to grab. How might you go about doing that?

- Code to create an image card using div

<!-- <div key={this.props._id} className = "Name">
        <figure onClick={this.props.handleSelect} className = "ImageUrl">
          <img className="beastImage" src={this.props.image_url} alt={this.props.aleration}></img>
            <figcaption className = "BeastTitle">{this.props.description}</figcaption>
        </figure>
          <div className="BeastCard_Div"> 
            {this.addingOne}
          </div>
      </div> -->