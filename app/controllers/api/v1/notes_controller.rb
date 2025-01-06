module Api
  module V1
    class NotesController < ApplicationController
      before_action :set_note, only: %i[show destroy]

      def index
        notes = Note.order(created_at: :desc)
        render json: notes
      end

      def show
        render json: @note
      end

      def create
        note = Note.create!(note_params)
        if note
          render json: note
        else
          render json: note.errors
        end
      end

      def destroy; end

      private

      def note_params
        params.permit(:title, :content)
      end

      def set_note
        @note = Note.find(params[:id])
      end
    end
  end
end
