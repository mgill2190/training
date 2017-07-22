Simple Shipment
====

As a user I want to be able to view and edit shipments. I would like a grid of shipments with the following columns, each column must be sortable. The default sort column will be ETA date (ascending).


* Reference, 
* Shipper Name
* PO Reference
* Port of Loading Location Name, 
* Port of Discharge Location Name, 
* Carrier Name
* ETA date (dd-mm-yyyy)

I would like to click a shipment reference hyperlink on the grid to show a responsive HTML page of the shipment information (as per UI mockup). 

![UI Mockup](https://s3-eu-west-1.amazonaws.com/warrant-group-files/training/Simple+Shipments+UI.png "UI Mockup")

I want to be able to edit any shipment field, apart from the shipment reference which cannot be changed. 

Any changes to these shipment fields must be saved.

Requirements
---
The user interface must use AngularJS, Kendo UI must provide the datagrid widget and bootstrap must provides CSS styling for forms and inputs.

All shipment information must be accessed from and persisted to a RESTful API.

### Installation

You will need to install NodeJS, and clone the [training repository](https://github.com/warrantgroup/training). Grunt (Task Runner) will automatically start a HTTP web server on [http://localhost:8000](http://localhost:8000), and RESTful API on [http://localhost:3000](http://localhost:3000) depending on port availability.

* Install [NodeJS](https://nodejs.org/en/download)
* Install [Git](https://git-scm.com/downloads)
* Run ``git clone https://github.com/warrantgroup/training.git && cd training/SimpleShipment``
* Run ``npm install``
* Run ``grunt``

### Resources

Please note Angular now uses semantic versioning, therefore the name AngularJS will refer to version 1.x, while Angular refers to any version 2.x and above.

**AngularJS 1.6**  
[https://angularjs.org](https://angularjs.org)

**Kendo UI 2017 for JQuery**  
[https://www.telerik.com/kendo-ui](https://www.telerik.com/kendo-ui)  
[http://demos.telerik.com/kendo-ui](http://demos.telerik.com/kendo-ui)  
*Please ignore “Kendo for Angular” which refers to Angular version (2.x).*

**Bootstap 3.37**  
[http://getbootstrap.com](http://getbootstrap.com)

**JSON Server (RESTful API)**
[https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com)
[https://github.com/typicode/json-server](https://github.com/typicode/json-server)