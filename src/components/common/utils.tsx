import moment from "moment";

export default {
  formatUserChats: (data: any) => {
    const REFERENCE = moment(new Date());
    const TODAY = REFERENCE.clone().startOf("day");
    const YESTERDAY = REFERENCE.clone().subtract(1, "days").startOf("day");
    const A_WEEK_OLD = REFERENCE.clone().subtract(7, "days").startOf("day");

    const todayData: any = { title: "Today", items: [] };
    const yesterdayData: any = { title: "Yesterday", items: [] };
    const sevenDaysData: any = { title: "Previous 7 Days", items: [] };
    const olderData: any = { title: "Older", items: [] };

    data.map((session: any) => {
      if (session.created_ts && moment(session.created_ts).isSame(TODAY, "d")) {
        todayData.items.push(session);
      } else if (
        session.created_ts &&
        moment(session.created_ts).isSame(YESTERDAY, "d")
      ) {
        yesterdayData.items.push(session);
      } else if (
        session.created_ts &&
        moment(session.created_ts).isSame(A_WEEK_OLD, "d")
      ) {
        sevenDaysData.items.push(session);
      } else {
        olderData.items.push(session);
      }
      // console.log("11111111", { session, a: moment(session.created_ts) });
    });
    const retData: any = { sections: [] };
    if (todayData.items.length) retData.sections.push(todayData);
    if (yesterdayData.items.length) retData.sections.push(yesterdayData);
    if (sevenDaysData.items.length) retData.sections.push(sevenDaysData);
    if (olderData.items.length) retData.sections.push(olderData);
    return retData;
  },
};
