<template>
        <div class="font-sans mx-auto my-4 pb-4 rounded-md border border-blue max-w-xl">
			<div class="flex justify-between border-blue border-b p-2" style="border-color #f79420;">
				<p class="text-sm text-blue">Billing Confirmation</p>
				<img src="close.svg" alt="">
        	</div>
            <form class="payment-form" action="#">
                <div class="text-sm payment-form__main">
                    <p class="payment-form__text">Total amount: {xxx}</p>
                    <label class="payment-form__label" for="card">Paid using:</label>
                    <div id="payment-form__methods" class="payment-methods">
                        <label><input class="payment-method" type="radio" id="card" name="payment-method" value="card">Credit Card</label>
                        <label><input class="payment-method" type="radio" id="cash" name="payment-method" value="cash">Cash</label>
                        <label><input class="payment-method" type="radio" id="voucher" name="payment-method" value="voucher">Voucher</label>
                    </div>
                </div>
                <div class="flex justify-center gap-5 m-6" >
					<el-button style="width: 200px" >Issue Tickets</el-button>
					<el-button style="width: 200px;background-color:#F56C6C" type="danger" >Cancel</el-button>
            	</div>
            </form>
        </div>

</template>
<style >
.payment-form {
	display: flex;
	flex-direction: column;
	gap: 20px;
	padding: 40px;
}

.payment-form__text {
	margin-bottom: 10px;
}

.payment-form__main {
	display: flex;
	gap: 20px;
	flex-direction: column;
}

.payment-methods{
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding-left: 60px;
}

.payment-method {
	margin-right: 10px;
}

.billing-form__buttons {
	display: flex;
	justify-content: space-between;
	padding: 0 50px;
	margin-top: 30px;
}

.form__button {
	width: 30%;
	border-radius: 7px;
	border: 1px solid black;
	line-height: 30px;
}
</style>

