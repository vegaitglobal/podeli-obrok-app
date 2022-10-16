export const SET_SIDEBAR_ACTIVE = 'SET_SIDEBAR_ACTIVE';
export const SET_SIDEBAR_UNACTIVE = 'SET_SIDEBAR_UNACTIVE';

export const setSidebarMenuActiveAction = isActive => {
  return {
    type: SET_SIDEBAR_ACTIVE,
    payload: isActive,
  };
};

// export const setSidebarMenuUnacticeAction = isActive => {
//   return {
//     type: SET_SIDEBAR_UNACTIVE,
//     isActive: isActive,
//   };
// };
