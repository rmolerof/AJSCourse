package com.mgh.mt.beans;

public class D2L {
	private String host;
    private String appId ;
    private String appKey;
    private String userId ;
    private String userKey;
    
    public D2L(){ }
    
    public D2L(String host, String appId, String appKey,
			String userId, String userKey) {
		this.host = host;
		this.appId = appId;
		this.appKey = appKey;
		this.userId = userId;
		this.userKey = userKey;
	}
    
	public String getHost() {
		return host;
	}

	public void setHost(String host) {
		this.host = host;
	}
	public String getAppId() {
		return appId;
	}
	public void setAppId(String appId) {
		this.appId = appId;
	}
	public String getAppKey() {
		return appKey;
	}
	public void setAppKey(String appKey) {
		this.appKey = appKey;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public String getUserKey() {
		return userKey;
	}
	public void setUserKey(String userKey) {
		this.userKey = userKey;
	}
    
}
