ladmin@my-server:/opt$ cd /opt

ladmin@my-server:/opt$ sudo mkdir enonic

ladmin@my-server:/opt$ cd enonic

ladmin@my-server:/opt/enonic$ sudo curl -O http://repo.enonic.com/public/com/enonic/xp/distro/6.3.0/distro-6.3.0.zip

ladmin@my-server:/opt/enonic$ sudo unzip -qq distro-6.3.0.zip 

ladmin@my-server:/opt/enonic$ sudo ln -s enonic-xp-6.3.0 xp

ladmin@my-server:/opt/enonic$ sudo rm distro-6.3.0.zip

ladmin@my-server:/opt/enonic$ ls -la
total 91208
drwxr-xr-x  3 root root     4096 Nov 23 10:09 ./
drwxr-xr-x 23 root root     4096 Dec  5  2012 ../
drwxr-xr-x  8 root root     4096 Nov 23 10:10 enonic-xp-6.3.0/
lrwxrwxrwx  1 root root       24 Nov 23 10:10 xp -> enonic-xp-6.3.0/

ladmin@my-server:/opt/enonic$ 