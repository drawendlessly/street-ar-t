# The street-ar-t project

## A simple webapp to display AR models from an AR QrCode



## A simple idea

The all idea about this project came from [Waxhead](https://www.instagram.com/waxheadart), a street artist from Montréal.

He wanted to use Augmented Reality QrCode to display 3D models of his sculptures in the streets.

This project is a very simple webapp built on top of [AR.js]() librairies that do not necessitate any backend code to run but could still be used to display a variety of models.

Each model to display is associated with an URL that can be used to generate an AR QrCode to trigger the experience.

Everything has been built to leverage the ability to host public website on Github pages and this repo can be forked to create a base for your own webapp, hosting your own models.

## A simple code

**Disclaimer : I am NOT an AR specialist ! (nor I am even a real frontend developper!)**

This project is mainly an AFrame component to handle the logic and some html and css for the web part.

It must be seen as a result of a Hackathon as everything has been done in less than 4 days (with an entire day dedicated to writing the documentation).

**It is not done as it *should be* done!**

Especially:
* The AFrame component *should be* split at least in two different components to separate the resolution of the model from the URL and the messages display logic. 
* Each component *should be* a proper AFrame component built via the [angle](https://www.npmjs.com/package/angle/) command line tool. Therefore, each component *should be* unit-tested and distributed properly.

On the other hand, the all js code is a 120 lines source and do the job. The amount of boilerplate to provide proper software architecture and quality was not on the scope of this little hackathon...

This approach is a rough tradeoff but the result can still be used to display 3D models triggered by an AR QrCode.

There are also basic customization possbilities offered for people that would like to reuse this project to host their own models.

## Credits


