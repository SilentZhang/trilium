import FlexContainer from "./containers/flex_container.js";
import searchService from "../services/search.js";
import OpenNoteButtonWidget from "./buttons/open_note_button_widget.js";

export default class BookmarkButtons extends FlexContainer {
    constructor() {
        super("column");

        this.contentSized();
    }

    async refresh() {
        const bookmarkedNotes = await searchService.searchForNotes("#bookmarked");

        this.$widget.empty();
        this.children = [];
        this.noteIds = [];

        for (const note of bookmarkedNotes) {
            this.noteIds.push(note.noteId);

            const buttonWidget = new OpenNoteButtonWidget().targetNote(note.noteId);

            this.child(buttonWidget);

            this.$widget.append(buttonWidget.render());

            buttonWidget.refreshIcon();
        }
    }

    initialRenderCompleteEvent() {
        this.refresh();
    }

    entitiesReloadedEvent({loadResults}) {
        if (loadResults.getAttributes().find(attr => attr.type === 'label' && attr.name === 'bookmarked')) {
            this.refresh();
        }

        if (loadResults.getNoteIds().find(noteId => this.noteIds.includes(noteId))) {
            this.refresh();
        }

        if (loadResults.getAttributes().find(attr => attr.type === 'label'
            && ['iconClass', 'workspaceIconClass'].includes(attr.name)
            && this.noteIds.includes(attr.noteId))
        ) {
            this.refresh();
        }
    }
}
