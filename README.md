# Assignment

Product Listing Page

## Description

- It display the list of product
- Product List (Component) is loaded using the React Suspense and Lazy method
- The product list displayed are fetched for a open source dummy API [Dummy Product](https://dummyjson.com/products)
- Images of Product are loaded using the lazy attribute

## Getting Started

To set up the assignment locally.

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js**: Download and install from [here](https://nodejs.org/). Version used is v20.18.0
- **Git**: You can install it from [here](https://git-scm.com/).

### Clone the Repository

To get a copy of the assignment up and running on your local machine, follow these steps:

1. Open your terminal or command prompt.
2. Navigate to the directory where you want to clone the assignment.
3. Run the following command to clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git

### Run it locally
To run it locally follow the below steps:

1. Go to the cloned directory and run the install command

    ```bash
    npm install
2. After the packages are installed correctly run the below code to run the assignment in dev mode
    ```bash
    npm run dev
3. To run the unit test for the assignment run the below command. make sure to stop the previous command using `Ctrl+C`
    ```bash
    npm run test

### Testing the performance using chrome Lighthouse
To test the performance we need to make the assignment production ready to make it in local system follow the below command:

1. In the terminal run the build command
    ```bash
    npm run build
2. After the build is complete run the preview command
    ```bash
    npm run preview
 3. It will serve you the url copy the url in chrome and check the performance using the Lighthouse