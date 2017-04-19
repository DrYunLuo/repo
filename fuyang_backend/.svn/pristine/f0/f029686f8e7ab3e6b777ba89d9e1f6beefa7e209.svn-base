package com.yichuang.fuyang.service;




public class YichuangException extends RuntimeException {

	public static final int ERROR1=1;//参数为空或参数不对
	public static final int ERROR2=2;
	
	public int getField() {
		return field;
	}

	private int field;
	
	public YichuangException() {
		
	}

	public YichuangException(String message, Throwable cause,
			boolean enableSuppression, boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}

	public YichuangException(String message, Throwable cause) {
		super(message, cause);
		
	}

	public YichuangException(int field ,String message) {
		super(message);
		this.field = field;
	}

	public YichuangException(Throwable cause) {
		super(cause);
		
	}

	private static final long serialVersionUID = -7464794318727125199L;

	

	
	
}
