export const SET_SIDEBAR_ACTIVE = 'SET_SIDEBAR_ACTIVE';
export const SET_SIDEBAR_POSITION = 'SET_SIDEBAR_POSITION';

export const setSidebarMenuActiveAction = isActive => {
  return {
    type: SET_SIDEBAR_ACTIVE,
    payload: isActive,
  };
};

export const setSidebarPosition = topPosition => ({
    type: SET_SIDEBAR_POSITION,
    payload: topPosition,
});
