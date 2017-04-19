package com.yichuang.fuyang.service;

public class NameOrPasswordException extends RuntimeException {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -731049136329562846L;
	public static final int NAME=1;
	public static final int PASSWORD=2;
	
	private int field;
	
	public NameOrPasswordException() {
	}
	public NameOrPasswordException(
			int field, String message) {
		super(message);
		this.field = field;
	}
	public NameOrPasswordException(Throwable cause) {
		super(cause);
	}
	public NameOrPasswordException(String message, Throwable cause) {
		super(message, cause);
	}
	public NameOrPasswordException(String message, Throwable cause, boolean enableSuppression,
			boolean writableStackTrace) {
		super(message, cause, enableSuppression, writableStackTrace);
	}
	
	public int getField() {
		return field;
	}

}
