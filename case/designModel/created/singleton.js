/**单例模式:保证一个类只有一个实例, 一般先判断实例是否存在,如果存在直接返回, 不存在则先创建再返回,这样就可以保证一个类只有一个实例对象. */
class HttpService {
	static instance: HttpService;
	static getInstance() {
		if (!this.instance) {
			this.instance = new HttpService();
		}
		return this.instance;
	}
}

export const httpSrv = HttpService.getInstance();