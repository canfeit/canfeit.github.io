## adb 无线 🔗 andoid 设备

1. 设备打开 usb 调试,与电脑 usb 连接
2. adb tcpip 5555
3. 查看设备 ip 地址`adb shell ifconfig wlan0`,断开 usb 连接
4. adb connect 设备 ip:5555
5. adb devices

## adb 外网连接 android 设备

- 远程:

```bash
brew install socat
adb start-server
socat TCP4-LISTEN:5037,reuseaddr,fork TCP4:127.0.0.1:5037 &
```

- 本地连远程查设备:`adb -H 远程ip devices`

## xcode 无线 🔗 ios 设备

![1](https://github.com/canfeit/canfeit.github.io/raw/master/ios无线1.png)
![2](https://github.com/canfeit/canfeit.github.io/raw/master/ios无线2.png)

## xcode 外网连接 ios 设备

- 连接 ios 设备的远程机器

```bash
#查看usb连接的ios设备ID
system_profiler SPUSBDataType | sed -n -E -e '/(iPhone|iPad)/,/Serial/s/ *Serial Number: *(.+)/\1/p'
brew install socat
socat TCP-LISTEN:8555,reuseaddr,fork UNIX-CONNECT:/var/run/usbmuxd
```

- 本地机器

```bash
brew install socat
mv /var/run/usbmuxd /var/run/usbmuxx
socat UNIX-LISTEN:/var/run/usbmuxd,mode=777,reuseaddr,fork TCP:远程ip:8555
#所有设备列表
instruments -s devices
```

## 自启动脚本

1. 在用户主目录新建:`touch ~/start.sh`

```bash
adb start-server
socat TCP4-LISTEN:5037,reuseaddr,fork TCP4:127.0.0.1:5037 &
socat TCP-LISTEN:8555,reuseaddr,fork UNIX-CONNECT:/var/run/usbmuxd &
```

2. 添加执行权限:`chmod 755 ~/start.sh`
3. 默认打开方式改为[iterm2](https://www.iterm2.com/downloads.html)
4. 在系统偏好设置--用户与群组，添加开机启动项
