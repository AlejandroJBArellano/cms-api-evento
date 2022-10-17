# README #

This README would normally document whatever steps are necessary to get your application up and running.

### How to install MongoDB on Ubuntu
https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

https://www.mongodb.com/developer/how-to/mongodb-on-raspberry-pi/

```bash 
# Install the MongoDB 4.4 GPG key:
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
# Add the source location for the MongoDB packages:
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
# Download the package details for the MongoDB packages:
sudo apt-get update
# Install MongoDB:
sudo apt-get install -y mongodb-org
```


### What is this repository for? ###

* Quick summary
* Version
* [Learn Markdown](https://bitbucket.org/tutorials/markdowndemo)

### How do I get set up? ###

* Summary of set up
* Configuration

Copy source to /home/inpulse, then 

```bash
cd /home/inpulse/api-evento-cms/
npm install
sudo cp api-evento-cms.service /lib/systemd/system/
sudo chmod 644 /lib/systemd/system/api-evento-cms.service
sudo systemctl daemon-reload
sudo systemctl enable api-evento-cms.service
sudo reboot
```

To check logs:
```bash
journalctl -lf -n100 -u api-evento-cms
```

* Dependencies
* Database configuration
* How to run tests
* Deployment instructions

### Contribution guidelines ###

* Writing tests
* Code review
* Other guidelines

### Who do I talk to? ###

* Repo owner or admin
* Other community or team contact