
import { useState } from "react"
import { getGravityForm } from "../src/hooks/getGravityForm"
import { GravityForm } from "../src/components/GravityForm"
import { LoadingForm } from "../src/components/LoadingForm"
import { EntryCompleted } from "../src/components/EntryCompleted"

export const MyGravityForm = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [isEntrySubmitted, setIsEntrySubmitted] = useState(false)
    const gravityForm = getGravityForm(1, isLoading, setIsLoading)

    const { title, description, fields, button } = gravityForm

    return (
        <>
            {
                isLoading ? <LoadingForm /> :
                    isEntrySubmitted
                        ? <EntryCompleted />
                        : <GravityForm
                            id={1}
                            fields={fields}
                            button={button}
                            loading={isLoading}
                            setLoading={setIsLoading}
                            submitted={isEntrySubmitted}
                            sendSubmission={setIsEntrySubmitted}
                        />

            }
        </>
    )
}

