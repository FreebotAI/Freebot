// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

interface IFreebot {
    // Events
    event ServiceRequested(address indexed user, uint256 indexed serviceId, uint256 amount);
    event ServiceCompleted(uint256 indexed serviceId, uint256 reward);
    event TokensStaked(address indexed user, uint256 amount);
    event TokensUnstaked(address indexed user, uint256 amount);

    // Structs
    struct Service {
        uint256 id;
        address user;
        uint256 amount;
        uint256 timestamp;
        bool completed;
        ServiceType serviceType;
    }

    enum ServiceType {
        PHONE,
        CHAT,
        EMAIL
    }

    // View functions
    function getService(uint256 serviceId) external view returns (Service memory);
    function getUserServices(address user) external view returns (uint256[] memory);
    function getStakedAmount(address user) external view returns (uint256);
    function getTokenBalance(address user) external view returns (uint256);

    // State-changing functions
    function requestService(ServiceType serviceType, uint256 amount) external returns (uint256);
    function completeService(uint256 serviceId) external;
    function stakeTokens(uint256 amount) external;
    function unstakeTokens(uint256 amount) external;
    function claimRewards() external returns (uint256);

    // Admin functions
    function setServiceFee(uint256 newFee) external;
    function setRewardRate(uint256 newRate) external;
    function withdrawFees() external;
} 