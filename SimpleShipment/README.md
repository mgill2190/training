Simple Shipment
====

As a user I want to be able to view and edit shipments. I would like a paginated grid of shipments with the following columns, each column must be sortable and filterable. The default sort behaviour will be by ETA date ascending.


* Reference (hyperlink to shipment information), 
* Shipper Name
* PO Reference
* Port of Loading Location Name, 
* Port of Discharge Location Name, 
* Carrier Name
* ETA date (formatted to dd-mm-yyyy)

I would like to click a shipment reference hyperlink on the grid to show a responsive HTML page of the shipment information (as per UI mockup). I want to be able to edit any shipment field, apart from the shipment reference which cannot be changed. 

Any changes to these shipment fields must be saved.

Requirements
---

The user interface must use AngularJS, with Kendo UI providing the datagrid widget and bootstrap providng CSS styling for forms and inputs.

All shipment information must be accessed from an RESTful API.

####Shipment API (backend) 

Please follow the instructions to setup a RESTful shipment API, which can safely be used for testing and prototyping.  

Documentation can be found at
https://github.com/typicode/json-server  

* Download[NodeJS](https://nodejs.org/en/download)and complete installation
* Run ``npm install -g json-server`` to install a fake RESTful API. 
* Run ``json-server https://warrantgroup.github.io/training/SimpleShipment/api.json``
* Check for response in browser on ``http://localhost:3000``

####User Interface (frontend) 

Please note Angular now uses semantic versioning, therefore the name AngularJS will refer to version 1.x, while Angular refers to any version 2.x and above.

**AngularJS 1.6**  
https://angularjs.org/

**Kendo UI 2017 for JQuery**  
https://www.telerik.com/kendo-ui  
http://demos.telerik.com/kendo-ui
https://kendo.cdn.telerik.com/2017.2.621/js/kendo.all.min.js  
https://kendo.cdn.telerik.com/2017.2.621/styles/kendo.common-bootstrap.min.css  
https://kendo.cdn.telerik.com/2017.2.621/styles/kendo.bootstrap.min.css  

*Please ignore “Kendo for Angular” which refers to Angular version (2.x).*

**Bootstap 3.37**  
http://getbootstrap.com/