"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = require("../../utils/util");
Page({
    data: {
        logs: [],
    },
    onLoad: function () {
        this.setData({
            logs: (wx.getStorageSync('logs') || []).map(function (log) {
                return {
                    date: util_1.formatTime(new Date(log)),
                    timeStamp: log
                };
            }),
        });
    },
    openNew: function () {
        wx.switchTab({ url: "../index/index" });
    },
    openComputed(){
        wx.navigateTo({
          url: '/pages/sub-pages/computedAndWatch/computedAndWatch',
        })
    },
    openSE(){
        wx.navigateTo({
            url: '/pages/sub-pages/SEComponents/SEComponents',
          })
    },
    toBusinessComponents(){
        wx.navigateTo({
          url: '/pages/sub-pages/business-components/business-components',
        })
    }

});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9ncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImxvZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSx5Q0FBNkM7QUFFN0MsSUFBSSxDQUFDO0lBQ0gsSUFBSSxFQUFFO1FBQ0osSUFBSSxFQUFFLEVBQUU7S0FDVDtJQUNELE1BQU0sRUFBTjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDWCxJQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFDLEdBQVc7Z0JBQ3RELE9BQU87b0JBQ0wsSUFBSSxFQUFFLGlCQUFVLENBQUMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQy9CLFNBQVMsRUFBRSxHQUFHO2lCQUNmLENBQUE7WUFDSCxDQUFDLENBQUM7U0FDSCxDQUFDLENBQUE7SUFDSixDQUFDO0lBQ0QsT0FBTztRQUNMLEVBQUUsQ0FBQyxTQUFTLENBQUMsRUFBQyxHQUFHLEVBQUMsZ0JBQWdCLEVBQUMsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7Q0FDRixDQUFDLENBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBsb2dzLnRzXG4vLyBjb25zdCB1dGlsID0gcmVxdWlyZSgnLi4vLi4vdXRpbHMvdXRpbC5qcycpXG5pbXBvcnQgeyBmb3JtYXRUaW1lIH0gZnJvbSAnLi4vLi4vdXRpbHMvdXRpbCdcblxuUGFnZSh7XG4gIGRhdGE6IHtcbiAgICBsb2dzOiBbXSxcbiAgfSxcbiAgb25Mb2FkKCkge1xuICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICBsb2dzOiAod3guZ2V0U3RvcmFnZVN5bmMoJ2xvZ3MnKSB8fCBbXSkubWFwKChsb2c6IHN0cmluZykgPT4ge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRhdGU6IGZvcm1hdFRpbWUobmV3IERhdGUobG9nKSksXG4gICAgICAgICAgdGltZVN0YW1wOiBsb2dcbiAgICAgICAgfVxuICAgICAgfSksXG4gICAgfSlcbiAgfSxcbiAgb3Blbk5ldygpe1xuICAgIHd4LnN3aXRjaFRhYih7dXJsOlwiLi4vaW5kZXgvaW5kZXhcIn0pXG4gIH1cbn0pXG4iXX0=