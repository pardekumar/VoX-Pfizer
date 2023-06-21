import { createContext, useContext, useReducer } from "react";

const UserChatContext = createContext(null);

const UserChatDispatchContext = createContext(null);

export function UserChatProvider({ children }) {
  const [userChats, dispatch] = useReducer(userChatsReducer, initialUserChats);

  return (
    <UserChatContext.Provider value={userChats}>
      <UserChatDispatchContext.Provider value={dispatch}>
        {children}
      </UserChatDispatchContext.Provider>
    </UserChatContext.Provider>
  );
}

export function useUserChats() {
  return useContext(UserChatContext);
}

export function useUserChatsDispatch() {
  return useContext(UserChatDispatchContext);
}

function userChatsReducer(userChats, action) {
  switch (action.type) {
    case "add_initial_load": {
      const data = [...userChats];
      action.payload.data.forEach((item) =>
        data.push({
          session_id: item.session_id,
          title: "", // as of now we have to show title of first user type message
          created_ts: item.created_ts,
          engine: "",
          temp: 0.1, // default global value
          max_tokens: 125, // default global value
          messages: [],
        })
      );
      return data;
    }
    case "add_session": {
      return [
        ...userChats,
        {
          session_id: action.payload.session_id,
          title: "", // as of now we have to show title of first user type message
          created_ts: action.payload.created_ts,
          engine: "", // default global value
          temp: 0.1, // default global value
          max_tokens: 125, // default global value
          messages: [],
        },
      ];
    }
    case "add_chat_history": {
      return userChats.map((session) => {
        if (session.session_id === action.session_id) {
          const messages = [...session.messages];
          action.payload.data.forEach((item) =>
            messages.push({
              msg_id: item.msg_id,
              usr_session_id: item.usr_session_id,
              msg_type: item.msg_type,
              msg: item.msg,
              msg_seq_num: item.msg_seq_num,
              created_ts: item.created_ts,
              parent_msg_id: item.parent_msg_id,
              like: null, // null by default
            })
          );
          return { ...session, messages };
        } else {
          return session;
        }
      });
    }
    case "update_session": {
      return userChats.map((session) => {
        if (session.session_id === action.session_id) {
          return {
            ...session,
            temp: action.temp,
            engine: action.engine,
            max_tokens: action.max_tokens,
          };
        } else {
          return session;
        }
      });
    }
    case "add_user_message": {
      return userChats.map((session) => {
        if (session.session_id === action.session_id) {
          const messages = [...session.messages];
          const newMes = action.payload.message;
          messages.push({
            msg_id: newMes.msg_id,
            usr_session_id: newMes.usr_session_id,
            msg_type: newMes.msg_type,
            msg: newMes.msg,
            msg_seq_num: newMes.msg_seq_num,
            created_ts: newMes.created_ts,
            parent_msg_id: newMes.parent_msg_id,
            like: null, // null by default
          });
          return { ...session, messages };
        } else {
          return session;
        }
      });
    }
    case "like": {
      return userChats.map((session) => {
        if (session.session_id === action.session_id) {
          return {
            ...session,
            messages: session.messages.map((message) => {
              if (message.msg_id === action.payload.msg_id) {
                return { ...message, like: action.like };
              } else {
                return message;
              }
            }),
          };
        } else {
          return session;
        }
      });
    }
  }
}

const initialUserChats = [
  {
    session_id: 1569,
    title: "sample session",
    created_ts: "2023-06-12T14:56:29",
    temp: 0.1,
    engine: "",
    max_tokens: 125,
    messages: [
      {
        msg_id: 651830,
        usr_session_id: 1567,
        msg_type: "system",
        msg: "sample system prompt",
        msg_seq_num: 1,
        created_ts: "2023-06-12T14:56:29",
        parent_msg_id: 0,
        like: null, // null by default
      },
      {
        msg_id: 651831,
        usr_session_id: 1567,
        msg_type: "prompt",
        msg: "sample system prompt",
        msg_seq_num: 2,
        created_ts: "2023-06-12T14:56:29",
        like: 1,
        parent_msg_id: 651830,
        like: null, // null by default
      },
    ],
  },
  {
    session_id: 1569,
    title: "sample session",
    created_ts: "2023-06-12T14:56:29",
    temp: 0.1,
    max_tokens: 125,
    messages: [],
  },
];
