# AddressBook

Addressbook is a web application that is written using React JS. The application includes a visible contact list and also includes the functionality to create, edit and delete contacts.

The address book captures the following information for each contact: Name, Address Line 1, Address Line 2, Town/City, County, Postcode, Telephone and Email. The address book also utilises the open source postcode lookup service https://postcodes.io/ for validating the postcode.


## Technical Architecture

This app is created entirely from scratch and does not use any boilerplate at all. More so, it becomes easier to customise the configurations without the boilerplate code. The application uses webpack for bundling all the code into one js file


## Unit testing

The app uses Jest with enzyme and is developed in TDD fashion. Shallow and mount features of Enzyme are used to load the components accordingly and test the various states. Jest picks up all the spec files in the app and runs the tests with a single command called **npm run test** which is configured as a script in package.json file. Specs are decorated wit appropriate comments to highlight what is being tested
