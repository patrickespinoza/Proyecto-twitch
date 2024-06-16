
import React from 'react';
import clsx from 'clsx';

const UserInfo = ({ user }) => {
  return (
    <div className="flex items-start p-2 rounded">
      <img
        src={`https://api.dicebear.com/9.x/identicon/svg?seed=${user.name}`}
        alt="user"
        className={clsx("w-12 h-12 rounded-full mr-4", {
          "grayscale": !user.isLive,
        })}
      />
      <div className="flex flex-col">
        <div className="user-name font-bold text-white">{user.name}</div>
        <div className="user-shortname text-sm text-gray-600">{user.shortName}</div>
        <div className="user-lives ml-auto">
          <span className="lives-count text-red-500">{user.isLive ? user.live : 'Offline'}</span>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;