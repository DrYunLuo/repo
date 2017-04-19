package com.yichuang.fuyang.web;


//import java.util.List;
//
//import javax.servlet.http.HttpSession;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Controller;
//import org.springframework.util.StringUtils;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestMethod;
//import org.springframework.web.bind.annotation.ResponseBody;
//
//import com.github.pagehelper.PageInfo;
//import com.yichuang.fuyang.entity.PostAtoms;
//import com.yichuang.fuyang.entity.User;
//import com.yichuang.fuyang.service.PostAtomsService;
//import com.yichuang.fuyang.service.PropertyService;
//import com.yichuang.fuyang.service.UserService;
//import com.yichuang.fuyang.service.YichuangException;
//import com.yichuang.fuyang.util.DefaultResponse;
//import com.yichuang.fuyang.util.JsonResult;
//import com.yichuang.fuyang.util.Utils;
/**
 * 社区评论(功能已移到CommunityController中)
 */
//@Controller
//@RequestMapping("/community")
public class PostAtomsController {
      
//	@Autowired
//	private PostAtomsService postAtomsService;
//	
//	@Autowired
//	private PropertyService propertyService;
//	
//	@Autowired
//	private UserService userService;
//	/**
//	 * 获取帖子评论
//	 * @param id
//	 * @param pageNo
//	 * @param pageSize
//	 * @param keyParams
//	 * @return
//	 */
//	@RequestMapping("/postAtoms")
//	@ResponseBody
//    public JsonResult<PageInfo<PostAtoms>> getPostsList(String id,Integer pageNo,Integer pageSize,String keyParams){
//		JsonResult<PageInfo<PostAtoms>> result = null;
//		try{
//			JsonResult<PageInfo<PostAtoms>> chekcResult = Utils.checkKeyParams(id+propertyService.KEY, keyParams);
//			if(chekcResult != null){
//				result = chekcResult;
//			}else{
//				
//				PageInfo<PostAtoms> list = postAtomsService.queryPostatoms(id,pageNo, pageSize);
//				result = new JsonResult<PageInfo<PostAtoms>>(list);
//			}
//			return result;
//		}catch(YichuangException e){
//			e.printStackTrace();
//			return new JsonResult<PageInfo<PostAtoms>>(1,"获取帖子评论失败",null);
//		}catch(Exception e){
//			e.printStackTrace();
//			return new JsonResult<PageInfo<PostAtoms>>(e);
//		}
//	} 
//	
//	/**
//	 * 评论帖子
//	 * @param postAtoms
//	 * @param token
//	 * @param session
//	 * @return
//	 */
//	@RequestMapping("/savepostAtoms" )
//	@ResponseBody
//    public JsonResult<String> savePostAtoms(PostAtoms postAtoms, String token ,String keyParams){
//		JsonResult<String> result = null;
//		String volunId = postAtoms.getVolunteerId();
//		if(StringUtils.isEmpty(volunId)){
//			return new JsonResult<String>(DefaultResponse.PARAM_NULL_ERROR,null);
//		}
//		List<User> list = userService.getUserByID(volunId);
//		if(list != null && list.size() > 0){
//			if(!list.get(0).getToken().equals(token)){
//				return new JsonResult<String>(DefaultResponse.TOKEN_NULL_ERROR,null);
//			}
//		}
//		
//		try{
//			JsonResult<String> checkResult = Utils.checkKeyParams(token+propertyService.KEY, keyParams);
//			if(checkResult != null){
//				result = checkResult;
//			}else{
//				postAtomsService.savePostAtoms(postAtoms);
//				result = new JsonResult<String>(0,"Postings success",null);
//			}
//			return result;
//		}catch(YichuangException e){
//			e.printStackTrace();
//			return new JsonResult<String>(e.getField(),e.getMessage(),null);
//		}catch(Exception e){
//			e.printStackTrace();
//			return new JsonResult<String>(e);
//		}
//	} 
}
