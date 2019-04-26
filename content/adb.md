##adb 远程连接设备

1. 设备打开 usb 调试,与电脑 usb 连接
2. adb tcpip 5555
3. 查看设备 ip 地址`adb shell ifconfig wlan0`,断开 usb 连接
4. adb connect ip:5555
5. adb devices
