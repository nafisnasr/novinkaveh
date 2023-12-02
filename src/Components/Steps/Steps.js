import React from 'react'
import "./Steps.css"
import { BsPencil } from "react-icons/bs"
import { FaFilter ,FaHandshake} from "react-icons/fa"
import { AiOutlineCheck } from "react-icons/ai"

import StepBox from '../StepBox/StepBox'


export default function Steps() {
    return (
        <section className='steps'>
            <div className="container">
                <div className="steps-wrapper row">
                    <StepBox
                        title="ارسال درخواست"
                        text="تکمیل فرم آنلاین و ثبت درخواست"
                        icon={<BsPencil className='icon' />}
                    />
                    <StepBox
                        title="غربالگری"
                        text="انتخاب شدن افراد واجد شرایط از درخواست دهندگان"
                        icon={<FaFilter className='icon' />}
                    />
                    <StepBox
                        title="آشنایی اولیه"
                        text="این یک متن تستی است"
                        icon={<FaHandshake className='icon' />}
                    />
                    <StepBox
                        title="اخذ قرارداد"
                        text="تنظیم قرارداد نمایندگی واجد شرایط"
                        icon={<AiOutlineCheck className='icon' />}
                    />
                </div>
            </div>
        </section>
    )
}
