package com.yichuang.fuyang.util;

import java.io.File;
import java.io.FileInputStream;
import java.util.HashMap;
import java.util.Map;

import org.apache.commons.net.ftp.FTPClient;
import org.apache.commons.net.ftp.FTPReply;

/**
 * FTP工具类
 * 
 * @author zhuoming 2017-1-7 16:26:30
 */
public class FTPUtil {
	/**
	 * 创建连接
	 * 
	 * @param path
	 *            上传到ftp服务器哪个路径下
	 * @param addr
	 *            地址
	 * @param port
	 *            端口号
	 * @param username
	 *            用户名
	 * @param password
	 *            密码
	 * @return
	 * @throws Exception
	 */
	public static Map<String, Object> connect(String path, String addr, int port, String username, String password)
			throws Exception {
		Map<String, Object> returnMap = new HashMap<String, Object>();
		FTPClient ftp = new FTPClient();
		boolean connectFlag = false;
		ftp.setControlEncoding("UTF-8");
		int reply;
		ftp.connect(addr, port);
		ftp.login(username, password);
		ftp.setFileType(FTPClient.BINARY_FILE_TYPE);
		reply = ftp.getReplyCode();
		if (!FTPReply.isPositiveCompletion(reply)) {
			ftp.disconnect();
			connectFlag = false;
		}
		ftp.changeWorkingDirectory(path);
		connectFlag = true;
		returnMap.put("connectFlag", connectFlag);
		returnMap.put("FTPClient", ftp);
		return returnMap;
	}

	/**
	 * 
	 * @param file
	 *            上传的文件或文件夹、
	 * fileName 保存于服务器的文件名称
	 * ftp 已经获取连接的FTPClient实例
	 * @throws Exception
	 */
	public static void upload(File file, String fileName, FTPClient ftp) throws Exception {
		File gotFile = null;
		FileInputStream input = null;
		try {
			// 文件夹
			if (file.isDirectory()) {
				ftp.makeDirectory(file.getName());
				ftp.changeWorkingDirectory(file.getName());
				String[] files = file.list();
				for (int i = 0; i < files.length; i++) {
					File folderFile = new File(file.getPath() + "\\" + files[i]);
					if (folderFile.isDirectory()) {
						upload(folderFile, fileName, ftp);
						ftp.changeToParentDirectory();
					} else {
						gotFile = new File(file.getPath() + "\\" + files[i]);
						input = new FileInputStream(gotFile);
						ftp.storeFile(fileName, input);
						if (input != null) {
							input.close();
						}
					}
				}
			} else {// 文件
				gotFile = new File(file.getPath());
				input = new FileInputStream(gotFile);
				ftp.storeFile(fileName, input);
				if (input != null) {
					input.close();
				}
			}
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			// 断开连接
			ftp.abort();
		}
	}
}
